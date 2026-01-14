# lolite.__private.invertfallback

### `invertFallback.js`
A fallback implementation of `lolite.invert` to avoid circular dependencies. No non-finite-to-zero coercion is in this implementation.
```javascript
const invert = require("lolite").__private.invertFallback
console.log(invert(1)) // -1
console.log(invert(-1)) // 1
console.log(invert("hi")) // "hi" (normal lolite.invert would return -0)
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.