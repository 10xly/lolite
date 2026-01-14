# lolite.ceil

### ceil(value)
Round a number up to the nearest whole integer.
Non-finite or non-numeric values are coerced to zero.

```javascript
const ceil = require("lolite.ceil")
const positiveResult = ceil(2.1)
// result: 3

const negativeResult = ceil(-2.1)
// result: 2

const coercedResult = ceil("garbage")
// result: 0 (0 ceiled)
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.