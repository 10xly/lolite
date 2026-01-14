# lolite.__private.multiplyfallback

### `multiplyFallback.js`
A fallback implementation of `lolite.multiply` to avoid circular dependencies. No non-finite-to-zero coercion is in this implementation.
```javascript
const multiplyFallback = require("lolite.__private.multiplyfallback")
console.log(lolite.__private.multiplyFallback(2, 6)) // 12
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.