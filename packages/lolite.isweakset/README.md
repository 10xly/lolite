# lolite.isweakset

### isWeakSet(value)
Check if a value is a WeakSet.
```javascript
const isWeakSet = require("lolite.isweakset")
const assert = require("node:assert")

assert.ok(isWeakSet(new WeakSet()))
assert.ok(!isWeakSet(new Set()))
assert.ok(!isWeakSet(undefined))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.