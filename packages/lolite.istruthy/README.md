# lolite.istruthy

### isTruthy(value)
Check if a value is *truthy*.
```javascript
const isTruthy = require("lolite.istruthy")
const assert = require("node:assert")

assert.ok(isTruthy(true))
assert.ok(isTruthy("garbage"))
assert.ok(isTruthy(67))
assert.ok(isTruthy({ test: 1 }))
assert.ok(isTruthy([ sigma: "skibidi" ]))
assert.ok(isTruthy(Symbol("foo")))
assert.ok(isTruthy(42n))
assert.ok(isTruthy(() => {}))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.