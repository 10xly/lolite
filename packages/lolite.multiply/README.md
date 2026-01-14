# lolite.multiply

### multiply(multiplier, multiplicand)
Calculates the product of two values.
Non-finite or non-numeric values are coerced to zero.

```javascript
const multiply = require("lolite.multiply")
const product = multiply(6, 7)
// product: 42

const coercedProduct = multiply(NaN, "garbage")
// result: 0 (0 * 0)
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.