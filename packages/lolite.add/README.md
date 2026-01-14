# lolite.add

### add(augend, addend)
Calculates the arithmetic sum of two values. 
Non-finite or non-numeric values are coerced to zero.

```javascript
const add = require("lolite.add")
const sum = add(5, 2)
// sum: 7

const coercedSum = add(Infinity, "garbage")
// result: 0 (0 + 0)
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.