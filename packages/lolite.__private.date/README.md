# lolite.__private.date

### `date.js`
A file that just exports the `Date` constructor.
```javascript
const $Date = require("lolite").__private.date
const assert = require("node:assert")
assert.ok($Date === Date)
```

This utility is part of the [LoLite](https://github.com/enterprise-npm-ai/lolite) utility suite.