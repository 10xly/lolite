# lolite.isstring

### isString(value)
Check if a value is a string primitive.
```javascript
const isString = require("lolite.isstring")
const assert = require("node:assert")

assert.ok(isString("test"))
assert.ok(isString(""))
assert.ok(!isString(Object("test")))
assert.ok(!isString(new String("test")))
assert.ok(!isString(/anything else that isn't a string/))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.