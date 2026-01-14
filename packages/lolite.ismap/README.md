# lolite.ismap

### isMap(value)
Check if a value is a Map.
```javascript
const isMap = require("lolite.ismap")
const assert = require("node:assert")

assert.ok(isMap(new Map()))
assert.ok(!isMap(new WeakMap()))
assert.ok(!isMap({}))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.