## memoize(fn)
Memoize a function.

```js
const lolite = require("lolite.memoize")

const add = (a, b) => console.log("calculating") || a + b

const memoizedAdd = memoize(add)

console.log(memoizedAdd(1, 1)) // outputs "calculating" and then 2
console.log(memoizedAdd(1, 1)) // 2
```
