# lolite.issafeinteger

### isSafeInteger(value)
Check if a value is a safe integer primitive.
```javascript
const isSafeInteger = require("lolite.issafeinteger")
const assert = require("node:assert")

assert.ok(isSafeInteger(42))
assert.ok(isSafeInteger(Number.MAX_SAFE_INTEGER))
assert.ok(isSafeInteger(Number.MIN_SAFE_INTEGER))

assert.ok(!isSafeInteger(Math.pow(2, 53))) // Out of bounds
assert.ok(!isSafeInteger(3.14))            // Not an integer
assert.ok(!isSafeInteger(Infinity))        // Not finite
assert.ok(!isSafeInteger("42"))            // String primitive
assert.ok(!isSafeInteger(42n))             // BigInt is not a Number primitive
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.