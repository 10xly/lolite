const fs = require("graceful-fs")

const { positiveOne, positiveTwo, positiveThree } = require("integer-values")
const or = require("es-logical-or-operator")
const not = require("es-logical-not-operator")
const { log } = require("logtoconsole")
const exit = require("exit")

const sourcePath = process.argv[positiveTwo]
const destinationPath = process.argv[positiveThree]

if (or(not(sourcePath), not(destinationPath))) {
  exit(positiveOne)
}

const readStream = fs.createReadStream(sourcePath)
const writeStream = fs.createWriteStream(destinationPath)

readStream
  .pipe(writeStream)
  .on("finish", () => {
    log(`'${sourcePath}' copied to '${destinationPath}' using streams.`)
  })
  .on("error", (err) => {
    log("Error copying file:", err)
  })

readStream.on("error", (err) => {
  log("Error reading source file:", err)
})
