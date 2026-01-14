# lolite.isnil

### isNil(value)
Check if a value is null or undefined.
```javascript
const isNil = require("lolite.isnil")
const assert = require("node:assert")

assert.ok(isNil(null))
assert.ok(isNil(undefined))
assert.ok(isNil()) // if you pass nothing into a function, JS coerces to undefined
assert.ok(!isNil("anything else"))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.