#!/usr/bin/env node

const fs = require("fs").promises
const { existsSync } = require("fs")
const path = require("path")

const FORCED_DEPENDENCIES = {
  "lolite.__private.date": ["date"]
}

/* -------------------------------------------------- */
/* Logging helpers                                    */
/* -------------------------------------------------- */
const log = (msg) => console.log(`🔍 ${msg}`)
const step = (msg) => console.log(`📦 ${msg}`)
const done = (msg) => console.log(`✅ ${msg}`)

/* -------------------------------------------------- */
/* Paths & inputs                                     */
/* -------------------------------------------------- */
const ROOT = path.resolve(__dirname, "..")
const SRC = path.join(ROOT, "src")
const LIB = path.join(SRC, "lib")
const PRIVATE = path.join(SRC, "private")
const DIST = path.join(ROOT, "packages")

const parentPkg = require(path.join(ROOT, "package.json"))
let parentReadme = ""

/* -------------------------------------------------- */
/* Utilities & Caching                                */
/* -------------------------------------------------- */
const toLower = (s) => s.toLowerCase()
const scanCache = new Map()

async function getJsFiles(dir) {
  if (!existsSync(dir)) return []
  const files = await fs.readdir(dir)
  return files.filter((f) => f.endsWith(".js"))
}

function parseRequires(code) {
  const regex = /require\(["']([^"']+)["']\)/g
  const out = []
  let match
  while ((match = regex.exec(code))) {
    out.push(match[1])
  }
  return out
}

function getExternalPackage(dep) {
  if (dep.startsWith("@")) {
    return dep.split("/").slice(0, 2).join("/")
  }
  return dep.split("/")[0]
}

/* -------------------------------------------------- */
/* Dependency collection (Optimized with Cache)       */
/* -------------------------------------------------- */
async function collectDeps(entryFile, seenFiles = new Set(), externalDeps = new Set()) {
  if (seenFiles.has(entryFile)) return { seenFiles, externalDeps }
  seenFiles.add(entryFile)

  // Use cache to avoid re-reading and re-parsing the same file across different packages
  let data
  if (scanCache.has(entryFile)) {
    data = scanCache.get(entryFile)
  } else {
    const code = await fs.readFile(entryFile, "utf8")
    const requires = parseRequires(code)
    data = { code, requires }
    scanCache.set(entryFile, data)
  }

  for (const req of data.requires) {
    if (req.startsWith("./") || req.startsWith("../")) {
      const resolvedBase = path.resolve(path.dirname(entryFile), req)
      const file = existsSync(resolvedBase) 
        ? resolvedBase 
        : existsSync(`${resolvedBase}.js`) 
          ? `${resolvedBase}.js` 
          : null

      if (file) {
        await collectDeps(file, seenFiles, externalDeps)
      }
    } else {
      const pkg = getExternalPackage(req)
      externalDeps.add(pkg)
    }
  }

  return { seenFiles, externalDeps }
}

/* -------------------------------------------------- */
/* README rewriting                                   */
/* -------------------------------------------------- */
function rewritePublicExamples(text, name) {
  return text
    .replace(/require\(["']lolite["']\)/g, `require("lolite.${name}")`)
    .replace(new RegExp(`lolite\\.${name}\\(`, "g"), `${name}(`)
}

function rewritePrivateExamples(text, name) {
  return text.replace(/require\(["']lolite["']\)\.__private\.[A-Za-z0-9_]+/g, `require("lolite.__private.${name}")`)
}

function extractPublicReadme(name) {
  const regex = new RegExp(`##\\s+${name}\\([^)]*\\)[\\s\\S]*?(?=\\n###|$)`, "i")
  const match = parentReadme.match(regex)
  if (!match) return `## ${name}\n\nNo documentation available.\n`
  return rewritePublicExamples(match[0], name)
}

function extractPrivateReadme(name) {
  const fileName = `${name}.js`
  const regex = new RegExp(`###\\s+\`${fileName}\`[\\s\\S]*?(?=\\n###|$)`, "i")
  const match = parentReadme.match(regex)
  if (!match) return `## ${name}\n\nNo documentation available.\n`
  return rewritePrivateExamples(match[0], name)
}

/* -------------------------------------------------- */
/* Package builder (Parallel-ready)                   */
/* -------------------------------------------------- */
async function buildPackage(name, entryFile, type) {
  const cleanName = toLower(name.replace("__private.", ""))
  const pkgName = type === "private" ? `lolite.__private.${cleanName}` : `lolite.${cleanName}`

  const pkgDir = path.join(DIST, pkgName)
  const srcDir = path.join(pkgDir, "src")

  step(`Building ${pkgName}...`)

  await fs.mkdir(srcDir, { recursive: true })

  const { seenFiles, externalDeps } = await collectDeps(entryFile)

  // Copy internal files in parallel
  await Promise.all(Array.from(seenFiles).map(async (file) => {
    const rel = path.relative(SRC, file)
    const dest = path.join(srcDir, rel)
    await fs.mkdir(path.dirname(dest), { recursive: true })
    return fs.copyFile(file, dest)
  }))

  const dependencies = {}
  const allDeps = new Set([...externalDeps, ...(FORCED_DEPENDENCIES[pkgName] || [])])
  
  for (const dep of allDeps) {
    if (parentPkg.dependencies?.[dep]) {
      dependencies[dep] = parentPkg.dependencies[dep]
    }
  }

  const main = type === "private" ? `src/private/${cleanName}.js` : `src/lib/${cleanName}.js`

  const pkgJson = {
    name: pkgName,
    version: parentPkg.version,
    main,
    license: parentPkg.license,
    author: parentPkg.author,
    repository: parentPkg.repository,
    dependencies,
  }

  const readme = type === "private" ? extractPrivateReadme(cleanName) : extractPublicReadme(cleanName)

  await Promise.all([
    fs.writeFile(path.join(pkgDir, "package.json"), JSON.stringify(pkgJson, null, 2)),
    fs.writeFile(path.join(pkgDir, "README.md"), readme)
  ])

  done(`${pkgName} complete.`)
}

/* -------------------------------------------------- */
/* Execution                                          */
/* -------------------------------------------------- */
async function main() {
  if (!existsSync(DIST)) {
    await fs.mkdir(DIST)
  }

  parentReadme = await fs.readFile(path.join(ROOT, "README.md"), "utf8")

  const [libFiles, privateFiles] = await Promise.all([
    getJsFiles(LIB),
    getJsFiles(PRIVATE)
  ])

  const tasks = [
    ...libFiles.map(file => {
      const name = path.basename(file, ".js")
      return buildPackage(name, path.join(LIB, file), "lib")
    }),
    ...privateFiles.map(file => {
      const name = path.basename(file, ".js")
      return buildPackage(`__private.${name}`, path.join(PRIVATE, file), "private")
    })
  ]

  await Promise.all(tasks)
  done("All LoLite packages generated successfully. 🎉")
}

main().catch(console.error)