# lolite.isundefined

### isUndefined(value)
Check if a value is undefined.
```javascript
const isUndefined = require("lolite.isundefined")
const assert = require("node:assert")

assert.ok(isUndefined(undefined))
assert.ok(isUndefined()) // if you pass nothing into a function, JS coerces to undefined
assert.ok(!isUndefined("anything else"))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.