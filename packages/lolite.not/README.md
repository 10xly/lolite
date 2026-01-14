# lolite.not

### not(value)
Returns the negation of the value passed in. Equivalent to JavaScript `!`.
```javascript
const not = require("lolite.not")

console.log(not(false)) // true
console.log(not(true)) // false
console.log(not(0)) // true
console.log(not("")) // true
console.log(not()) // true
console.log(not(1)) // false
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.