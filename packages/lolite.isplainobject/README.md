# lolite.isplainobject

### isPlainObject(value)
Check if a value is a plain object.
```javascript
const isPlainObject = require("lolite.isplainobject")
const assert = require("node:assert")

assert.ok(isPlainObject({}))
assert.ok(isPlainObject(Object.create(null)))
assert.ok(!isPlainObject([]))
assert.ok(!isPlainObject(null))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.