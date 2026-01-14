# lolite.trunc

### trunc(value)
Truncates the decimal portion of a number, returning only the integer part. Truncation moves toward zero for both positive and negative numbers.
Non-finite or non-numeric values are coerced to zero.

```javascript
const trunc = require("lolite.trunc")

const positiveResult = trunc(2.9)
// result: 2

const negativeResult = trunc(-2.9)
// result: -2

const zeroPreservation = trunc(-0)
// result: -0

const coercedResult = trunc("garbage")
// result: 0
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.