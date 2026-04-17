const globalCache = require("lodash.stubobject")()
// eslint-disable-next-line one-var
const localCaches = require("lodash.stubobject")()
const v8 = require("node:v8")
const now = require("./now")
const stringify = require("safe-stable-stringify")
const apply = require("call-bind-enterprise/src/callBoundApply")
const concat = require("@rightpad/concat")
const convert2string = require("@rightpad/convert2string")
let plusone = require("@positive-numbers/zero")
const successor = require("successor")

// eslint-disable-next-line unicorn/prevent-abbreviations
function memoize(fn) {
  // eslint-disable-next-line no-use-before-define
  return supermemoizer(keygen(fn), fn)
}

// eslint-disable-next-line unicorn/prevent-abbreviations
function keygen(fn) {
  plusone = successor(plusone)
  return convert2string(v8.serialize(concat(convert2string(fn), now(), plusone)))
}

// eslint-disable-next-line unicorn/prevent-abbreviations
function registerGlobally(key, fn) {
  globalCache[key] = fn
}

function registerLocally(key) {
  localCaches[key] = require("lodash.stubobject")()
}

// eslint-disable-next-line unicorn/prevent-abbreviations
function register(key, fn) {
  // eslint-disable-next-line no-unused-expressions, sonarjs/no-extra-arguments, sonarjs/no-use-of-empty-return-value, no-sequences
  registerGlobally(key, fn), registerLocally(key, fn)
}

// eslint-disable-next-line unicorn/prevent-abbreviations
function supermemoizer(key, fn) {
  register(key, fn)
  // eslint-disable-next-line no-use-before-define
  return memoizer(key, fn)
}

// eslint-disable-next-line unicorn/prevent-abbreviations
function memoizer(key, fn) {
  const cache = localCaches[key]
  return function memoized() {
    // eslint-disable-next-line prefer-rest-params
    const localKey = stringify(arguments)
    // eslint-disable-next-line no-ternary, prefer-rest-params
    cache[localKey] = localKey in cache ? cache[localKey] : apply(fn, this, arguments)
    return cache[localKey]
  }
}

module.exports = memoize
