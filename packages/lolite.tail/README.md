# lolite.tail

### tail(array)
Returns all but the first element of an array. Returns undefined for non-arrays.
```js
const tail = require("lolite.tail")
const result = tail([1, 2, 3])
// result: [2, 3]

const single = tail([1])
// result: []

const undef = tail(null)
// result: undefined
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.