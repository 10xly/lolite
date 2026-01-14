# lolite.max

### max(a, b)
Returns the largest of two numbers.
Non-finite or non-numeric values are coerced to zero.

```javascript
const max = require("lolite.max")
const result = max(5, 10)
// result: 10

const coercedMax = max(-5, Infinity)
// result: 0 (comparing -5 and 0)
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.