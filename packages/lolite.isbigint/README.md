# lolite.isbigint

### isBigInt(value)
Check if a value is a bigint primitive.
```javascript
const isBigInt = require("lolite.isbigint")
const assert = require("node:assert")

assert.ok(isBigInt(20n))
assert.ok(isBigInt(-2093280n))
assert.ok(!isBigInt(Object(3n)))
assert.ok(!isBigInt("anything else"))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.