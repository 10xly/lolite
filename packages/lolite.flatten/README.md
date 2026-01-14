# lolite.flatten

### flatten(array)
Flattens arrays. Returns undefined for non-arrays.

```javascript
const flatten = require("lolite.flatten")
const flat = flatten([1, [2, [3]]])
// flat: [1, 2, 3]
const undef = flatten("Not an array")
// undef: undefined
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.