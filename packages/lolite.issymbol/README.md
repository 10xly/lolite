# lolite.issymbol

### isSymbol(value)
Check if a value is a symbol primitive.
```javascript
const isSymbol = require("lolite.issymbol")
const assert = require("node:assert")

assert.ok(isSymbol(Symbol("test")))
assert.ok(isSymbol(Symbol.iterator))
assert.ok(!isSymbol(Object(Symbol("test"))))
assert.ok(!isSymbol("not a symbol"))
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.