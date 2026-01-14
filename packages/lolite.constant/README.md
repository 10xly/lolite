# lolite.constant

### constant(value)
Returns a function that returns a value.
```javascript
const constant = require("lolite.constant")
const assert = require("node:assert")

console.log(constant(2)()) // 2
const returnEnterprise = constant("enterprise")
console.log(returnEnterprise()) // "enterprise"
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.