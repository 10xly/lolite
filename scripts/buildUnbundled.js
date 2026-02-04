#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

/* -------------------------------------------------- */
/* Paths                                              */
/* -------------------------------------------------- */
const ROOT = path.resolve(__dirname, "..")
const BUILDS = path.join(ROOT, "builds")
const UNBUNDLED_DIR = path.join(BUILDS, "unbundled")
const SRC_LOLITE = path.join(ROOT, "src", "lolite.js")

const parentPkg = require(path.join(ROOT, "package.json"))

/* -------------------------------------------------- */
/* Logging helpers                                    */
/* -------------------------------------------------- */
const log = (msg) => console.log(`🔍 ${msg}`)
const step = (msg) => console.log(`📦 ${msg}`)
const done = (msg) => console.log(`✅ ${msg}`)

/* -------------------------------------------------- */
/* Parse src/lolite.js to extract exports             */
/* -------------------------------------------------- */
function parseExports(filepath) {
  const content = fs.readFileSync(filepath, "utf8")
  
  // Find the lolite object definition
  const objectMatch = content.match(/const lolite = \{([\s\S]*?)\}\s*module\.exports/m)
  if (!objectMatch) {
    throw new Error("Could not find lolite object in src/lolite.js")
  }
  
  const objectBody = objectMatch[1]
  const loliteExports = {}
  
  // Parse each line looking for: key: require("./path")
  const requireRegex = /(\w+):\s*require\(["']\.\/(?:lib|private)\/(\w+)["']\)/g
  let match
  
  while ((match = requireRegex.exec(objectBody))) {
    const [, exportName, fileName] = match
    loliteExports[exportName] = fileName
  }
  
  log(`Parsed ${Object.keys(loliteExports).length} exports from src/lolite.js`)
  
  return loliteExports
}

/* -------------------------------------------------- */
/* Create build directory                             */
/* -------------------------------------------------- */
if (!fs.existsSync(BUILDS)) {
  fs.mkdirSync(BUILDS)
}

if (!fs.existsSync(UNBUNDLED_DIR)) {
  fs.mkdirSync(UNBUNDLED_DIR)
}

step("Building lolite-unbundled")

/* -------------------------------------------------- */
/* Parse exports from src/lolite.js                   */
/* -------------------------------------------------- */
const loliteExports = parseExports(SRC_LOLITE)

/* -------------------------------------------------- */
/* Generate index.js that re-exports everything       */
/* -------------------------------------------------- */
const indexLines = [
  "/* eslint-disable sort-keys */",
  "/* eslint-disable perfectionist/sort-objects */",
  "const lolite = {"
]

// Track dependencies
const dependencies = {}

for (const [exportName, fileName] of Object.entries(loliteExports)) {
  const pkgName = `lolite.${fileName.toLowerCase()}`
  indexLines.push(`  ${exportName}: require("${pkgName}"),`)
  dependencies[pkgName] = parentPkg.version
}

indexLines.push("}")
indexLines.push("")
indexLines.push("module.exports = lolite")

const indexJs = indexLines.join("\n")
fs.writeFileSync(path.join(UNBUNDLED_DIR, "index.js"), indexJs)

log("Generated index.js")

/* -------------------------------------------------- */
/* Generate package.json with all lolite.* deps       */
/* -------------------------------------------------- */
const pkgJson = {
  name: "lolite-unbundled",
  version: parentPkg.version,
  description: "Modular distribution of LoLite - each function as a separate dependency for maximum tree-shaking potential",
  main: "index.js",
  keywords: [
    ...parentPkg.keywords,
    "modular",
    "unbundled", 
    "tree-shakeable",
    "micropackages"
  ],
  homepage: parentPkg.homepage,
  bugs: parentPkg.bugs,
  repository: parentPkg.repository,
  license: parentPkg.license,
  author: parentPkg.author,
  dependencies,
  engines: parentPkg.engines
}

fs.writeFileSync(
  path.join(UNBUNDLED_DIR, "package.json"),
  JSON.stringify(pkgJson, null, 2)
)

log("Generated package.json")

/* -------------------------------------------------- */
/* Generate README                                    */
/* -------------------------------------------------- */
const depCount = Object.keys(dependencies).length

const readme = `# lolite-unbundled

The modular, tree-shakeable distribution of LoLite.

## Why lolite-unbundled?

Instead of bundling all utilities into a single file, \`lolite-unbundled\` depends on individual \`lolite.*\` packages for each function. This provides:

- ✨ Maximum modularity
- 🌳 Superior tree-shaking potential
- 📦 Granular dependency management
- 🚀 Enterprise-grade architecture

## Installation

\`\`\`bash
npm install lolite-unbundled
\`\`\`

## Usage

Identical to regular LoLite:

\`\`\`javascript
const lolite = require("lolite-unbundled")

console.log(lolite.add(2, 3)) // 5
\`\`\`

## Architecture

This package contains ${depCount} individual lolite packages as dependencies, ensuring optimal code splitting and bundle optimization.

## Documentation

See the main [LoLite documentation](https://github.com/10xly/lolite#readme) for complete API reference.

## License

${parentPkg.license}
`

fs.writeFileSync(path.join(UNBUNDLED_DIR, "README.md"), readme)

log("Generated README.md")

done(`lolite-unbundled ready with ${depCount} dependencies 🎉`)