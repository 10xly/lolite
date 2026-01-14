# lolite.isfunction

### isFunction(value)
Check if a value is a function.
```javascript
const isFunction = require("lolite.isfunction")
const assert = require("node:assert")

assert.ok(isFunction(function() {}))
assert.ok(isFunction(function*() {}))
assert.ok(isFunction(async function() {}))
assert.ok(isFunction(async function*() {}))
assert.ok(isFunction(() => {}))
assert.ok(isFunction(async () => {}))
assert.ok(!isFunction("anything else"))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.