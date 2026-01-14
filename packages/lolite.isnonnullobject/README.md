# lolite.isnonnullobject

### isNonNullObject(value)
Check if a value is an object that isn't null.
```javascript
const isNonNullObject = require("lolite.isnonnullobject")
const assert = require("node:assert")

assert.ok(isNonNullObject({}))
assert.ok(isNonNullObject([]))
assert.ok(!isNonNullObject(null))
assert.ok(!isNonNullObject(42))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.