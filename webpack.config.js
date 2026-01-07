const path = require("path")

const commonConfig = {
  entry: "./src/lolite.js",
  target: "node",
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
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "umd",
      name: "LoLite",
    },
    globalObject: "this",
  },
}

module.exports = [
  {
    ...commonConfig,
    mode: "development",
    devtool: "source-map",
    output: {
      ...commonConfig.output,
      filename: "lolite.js",
    },
  },
]