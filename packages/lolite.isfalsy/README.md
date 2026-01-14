# lolite.isfalsy

### isFalsy(value)
Check if a value is *falsy*.
```javascript
const isFalsy = require("lolite.isfalsy")
const assert = require("node:assert")

assert.ok(isFalsy(false))
assert.ok(isFalsy(0))
assert.ok(isFalsy(0n))
assert.ok(isFalsy(""))
assert.ok(isFalsy(null))
assert.ok(isFalsy(undefined))
assert.ok(isFalsy()) // if you pass nothing into a function, JS coerces to undefined which is falsy
assert.ok(isFalsy(NaN))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.