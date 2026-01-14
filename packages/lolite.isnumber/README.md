# lolite.isnumber

### isNumber(value)
Check if a value is a number primitive.
```javascript
const isNumber = require("lolite.isnumber")
const assert = require("node:assert")

assert.ok(isNumber(2))
assert.ok(isNumber(54))
assert.ok(isNumber(-49))
assert.ok(isNumber(0))
assert.ok(isNumber(-0))
assert.ok(isNumber(NaN))
assert.ok(isNumber(Infinity))
assert.ok(isNumber(-Infinity))
assert.ok(!isNumber(new Number(42)))
assert.ok(!isNumber(Object(3)))
assert.ok(!isNumber("67"))
assert.ok(!isNumber("anything else"))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.