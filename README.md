# react-vector-maps

🗺️ A React component for interactive vector maps of the world and 100+ countries

[![npm](https://img.shields.io/npm/v/@south-paw/react-vector-maps.svg)](https://www.npmjs.com/package/@south-paw/react-vector-maps)
[![Dependencies](https://david-dm.org/South-Paw/react-vector-maps/status.svg)](https://david-dm.org/South-Paw/react-vector-maps)
[![Dev Dependencies](https://david-dm.org/South-Paw/react-vector-maps/dev-status.svg)](https://david-dm.org/South-Paw/react-vector-maps?type=dev)

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
# run tests
npm run test

# lint source
npm run lint

# build source
npm run build

# clean up build folders
npm run clean

# start docs for development
npm run docs:develop

# clean up docs folders
npm run docs:clean

# yarn install for the docs
npm run docs:install

# build docs for deployment
npm run docs:build

# serve docs from /public after build
npm run docs:serve
```

## License

MIT, see the [LICENSE](./LICENSE) file.
