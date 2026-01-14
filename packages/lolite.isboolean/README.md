# lolite.isboolean

### isBoolean(value)
Check if a value is a boolean primitive.
```javascript
const isBoolean = require("lolite.isboolean")
const assert = require("node:assert")

assert.ok(isBoolean(true))
assert.ok(isBoolean(false))
assert.ok(!isBoolean(new Boolean())) // this is a boolean object, not a boolean primitive
assert.ok(!"anything else")
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.