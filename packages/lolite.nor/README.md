# lolite.nor

### nor(a, b)
Returns the negation of the result of `or(a, b)`, where the `a` and `b` passed into `or` are the same `a` and `b` the user provides for `nor`.
```javascript
const nor = require("lolite.nor")

console.log(nor(false, false)) // true
console.log(nor(true, false))  // false
console.log(nor(false, true)) // false
console.log(nor(true, true)) // false
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.