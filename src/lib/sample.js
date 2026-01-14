// eslint-disable-next-line sonarjs/no-globals-shadowing, no-shadow-restricted-names, no-undefined
const undefined = require("./stubUndefined")
const $sample = require("array-sample")
const uncurry = require("uncurry-x")
// eslint-disable-next-line one-var
const baseSample = uncurry($sample)
const not = require("./not")
const isArray = require("./isArray")

function sample(array) {
  if (not(isArray(array))) {
    // eslint-disable-next-line no-undefined
    return undefined()
  }

  return baseSample(array)
}

module.exports = sample