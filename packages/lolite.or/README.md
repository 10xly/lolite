# lolite.or

### or(a,b)
Returns `a` if `a` is truthy, else returns `b`.
```javascript
const or = require("lolite.or")

console.log(or(true, false)) // true
console.log(or(false, true)) // true
console.log(or(true, true)) // true
console.log(or(false, false)) // false
console.log(or(0, true)) // true
console.log(or(0, "truthy value")) // "truthy value"
console.log(or("truthy value", false)) // "truthy value"
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.