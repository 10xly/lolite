# lolite.power

### power(base, exponent)
Calculates the exponentiation of a base to a power. Non-finite or non-numeric values are coerced to zero.

```javascript
const power = require("lolite.power")
const result = power(2, 3)
// result: 8

const fractional = power(2, -1)
// result: 0.5

const zeroPower = power(10, 0)
// result: 1

const coercedPower = power(Infinity, "garbage")
// result: 1 (0^0)
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.