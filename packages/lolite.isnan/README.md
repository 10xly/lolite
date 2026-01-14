# lolite.isnan

### isNaN(value)
Check if a value is NaN.
```javascript
const isNaN = require("lolite.isnan")
const assert = require("node:assert")

assert.ok(isNaN(NaN))
assert.ok(!isNaN("anything else"))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.