# react-vector-maps

🗺️ A React component for interactive vector maps of the world and 100+ countries

[![npm](https://img.shields.io/npm/v/@south-paw/react-vector-maps.svg)](https://www.npmjs.com/package/@south-paw/react-vector-maps)

## Features

- Simple and easy to implement React component for rendering interactive vector maps
- [100+ vector maps included](https://react-vector-maps.netlify.com/maps) out of the box, free from [MapSVG](https://mapsvg.com/maps)
- Convert your own vector map for the component to use with the [online converter](https://react-vector-maps.netlify.com/converter)
- Quick and straight forward to style your map however you want to

## Basic Usage

```jsx
import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';

// You'll need to download the json file from the docs site or you can create your own.
import world from './world.json';

export const Map = () => <VectorMap {...world} />;
```

See the [documentation](https://react-vector-maps.netlify.com/) for more examples and advanced usage of the component.

## Issues and Bugs

If you manage to find any, please report them [here](https://github.com/South-Paw/react-vector-maps/issues) so they can be squashed.

## Development and Contributing

Grab the repo and then install dependencies with `npm i`.

```bash
# Run TypeScript check and ESLint
npm run lint

# Run unit tests
npm run test

# Build package for publishing (/dist)
npm run build

# Remove build artifacts (/dist and /coverage)
npm run clean

# npm install for the docs
npm run docs:install

# Start docs for development
npm run docs:start

# Build docs for deployment
npm run docs:build

# Serve docs from /public after build
npm run docs:serve

# Clean up docs folders
npm run docs:clean
```

## License

MIT, see the [LICENSE](./LICENSE) file.
