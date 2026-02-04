# lolite-unbundled

The modular, tree-shakeable distribution of LoLite.

## Why lolite-unbundled?

Instead of bundling all utilities into a single file, `lolite-unbundled` depends on individual `lolite.*` packages for each function. This provides:

- ✨ Maximum modularity
- 🌳 Superior tree-shaking potential
- 📦 Granular dependency management
- 🚀 Enterprise-grade architecture

## Installation

```bash
npm install lolite-unbundled
```

## Usage

Identical to regular LoLite:

```javascript
const lolite = require("lolite-unbundled")

console.log(lolite.add(2, 3)) // 5
```

## Architecture

This package contains 71 individual lolite packages as dependencies, ensuring optimal code splitting and bundle optimization.

## Documentation

See the main [LoLite documentation](https://github.com/10xly/lolite#readme) for complete API reference.

## License

EGPSL10X-1.0
