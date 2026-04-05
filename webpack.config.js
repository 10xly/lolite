const path = require("path")
const webpack = require("webpack")

const commonConfig = {
  output: {
    library: {
      type: "umd",
      name: "lolite",
    },
    globalObject: "this",
    // This prevents Webpack from using arrow functions in the bundle wrapper
    environment: {
      arrowFunction: false,
      const: false,
      destructuring: false,
      forOf: false,
      module: false
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/, // Usually safe, but for ES3 you might need to compile some dependencies
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  // CoreJS 3 polyfills everything needed
                  useBuiltIns: "usage",
                  corejs: 3,
                  // Targeting a specific old engine or just generic ES3
                  targets: {
                    ie: "6" 
                  },
                  // Ensures Babel doesn't use ES6 imports/exports in its own output
                  modules: "commonjs"
                }
              ]
            ],
            // This is the secret sauce for ES3: it renames properties like .catch() to ["catch"]()
            plugins: [
              "@babel/plugin-transform-member-expression-literals",
              "@babel/plugin-transform-property-literals"
            ]
          }
        }
      }
    ]
  }
}

module.exports = [
  // 1. Standard Node Build
  {
    ...commonConfig,
    entry: "./src/lolite.js",
    mode: "development",
    target: ["web", "es3"], // Explicitly tell Webpack to target ES3
    devtool: "source-map",
    externalsPresets: { node: true },
    externals: [
      ({ request }, callback) => {
        if (!/^\./.test(request) && !path.isAbsolute(request)) {
          return callback(null, "commonjs " + request)
        }
        callback()
      },
    ],
    output: {
      ...commonConfig.output,
      path: path.resolve(__dirname, "dist"),
      filename: "lolite.js",
    },
  }
]