# lolite.abs

### abs(value)
Gets the absolute value of a number.
Non-finite or non-numeric values are coerced to zero.

```javascript
const abs = require("lolite.abs")
const result = abs(-42)
// result: 42

const coercedAbs = abs("garbage")
// result: 0
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.