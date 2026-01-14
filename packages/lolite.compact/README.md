# lolite.compact

### compact(array)
Cleanses an array of all falsy values. Returns undefined for non-arrays.

```javascript
const compact = require("lolite.compact")
const result = compact([1, 0, false, "hello"])
// result: [1, "hello"]
const undef = compact("Not an array")
// undef: undefined
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.