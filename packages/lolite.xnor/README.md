# lolite.xnor

### `xnor(a, b)`
Returns the negation of the result of `xor(a, b)`, where the `a` and `b` passed into `xor` are the same `a` and `b` the user provides for `xnor`.

```javascript
const xnor = require("lolite.xnor")
const testTruthyValue = "truthy"
const testFalsyValue = 0

console.log(xnor(true, false)) // false
console.log(xnor(false, true)) // false
console.log(xnor(testTruthyValue, testFalsyValue)) // false

console.log(xnor(true, true))  // true
console.log(xnor(false, false)) // true
console.log(xnor(testTruthyValue, testTruthyValue)) // true
console.log(xnor(testFalsyValue, testFalsyValue)) // true
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.