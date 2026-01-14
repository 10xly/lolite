# lolite.isobject

### isObject(value)
Check if a value is an object or null. Returns false for functions.
```javascript
const isObject = require("lolite.isobject")
const assert = require("node:assert")

assert.ok(isObject({}))
assert.ok(isObject(new Object()))
assert.ok(isObject(lolite))
assert.ok(isObject({ e: 1 }))
assert.ok(isObject(null))
assert.ok(isObject(Object("hi")))
assert.ok(!isObject(() => {}))
assert.ok(!isObject("hi"))
assert.ok(!isObject(63))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.