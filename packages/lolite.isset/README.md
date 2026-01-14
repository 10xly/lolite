# lolite.isset

### isSet(value)
Check if a value is a Set.
```javascript
const isSet = require("lolite.isset")
const assert = require("node:assert")

assert.ok(isSet(new Set()))
assert.ok(!isSet(new WeakSet()))
assert.ok(!isSet([]))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.