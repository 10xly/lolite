# lolite.identity

### identity(value)
Returns the value passed into the identity function.
```javascript
const identity = require("lolite.identity")
const assert = require("node:assert")

console.log(identity(2)) // 2
console.log(identity()) // undefined
console.log(identity(true)) // true
console.log(identity(null)) // null
console.log(identity("enterprise")) // "enterprise"
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.