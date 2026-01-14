# lolite.noop

### noop()
Does nothing.
```javascript
const noop = require("lolite.noop")
const assert = require("node:assert")

assert.ok(lolite.isUndefined(noop())) // noop returns undefined
assert.ok(lolite.isFunction(noop)) // noop is as function
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.