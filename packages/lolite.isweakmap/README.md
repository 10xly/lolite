# lolite.isweakmap

### isWeakMap(value)
Check if a value is a WeakMap.
```javascript
const isWeakMap = require("lolite.isweakmap")
const assert = require("node:assert")

assert.ok(isWeakMap(new WeakMap()))
assert.ok(!isWeakMap(new Map()))
assert.ok(!isWeakMap(null))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.