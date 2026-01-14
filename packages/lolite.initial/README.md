# lolite.initial

### initial(array)
Returns all but the last element of an array. Returns undefined for non-arrays.
```js
const initial = require("lolite.initial")
const result = initial([1, 2, 3])
// result: [1, 2]

const single = initial([1])
// result: []

const undef = initial("Not an array")
// result: undefined
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.