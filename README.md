# react-vector-maps

🗺️ A React component for interactive vector maps of the world and 100+ countries.

[![Live Demo](https://img.shields.io/badge/netlify-live_demo-1e9498.svg)](https://react-vector-maps.netlify.com/)
[![npm](https://img.shields.io/npm/v/@south-paw/react-vector-maps.svg)](https://www.npmjs.com/package/@south-paw/react-vector-maps)
[![CI Status](https://img.shields.io/travis/South-Paw/react-vector-maps.svg)](https://travis-ci.org/South-Paw/react-vector-maps)
[![Coveralls Status](https://img.shields.io/coveralls/github/South-Paw/react-vector-maps.svg)](https://coveralls.io/github/South-Paw/react-vector-maps)
[![Dependencies](https://david-dm.org/South-Paw/react-vector-maps/status.svg)](https://david-dm.org/South-Paw/react-vector-maps)
[![Dev Dependencies](https://david-dm.org/South-Paw/react-vector-maps/dev-status.svg)](https://david-dm.org/South-Paw/react-vector-maps?type=dev)

---

## 🐉 HERE BE DRAGONS

**This package is a work-in-progress and may contain bugs!**

If you manage to find any, please report them [here](https://github.com/South-Paw/react-vector-maps/issues) so they can be squashed.

## Basic Usage

**⚠️ Package is not published yet!**

```
import React from 'react';
import VectorMap, { world } from '@south-paw/react-vector-map';

const MyMap = () => (
  <VectorMap {...world} />
);

export default MyMap;
```

## Development

At the moment it's pretty simple, just do `yarn` then `yarn storybook` and visit `localhost:9000` in your browser if it doesn't pop up.

## License

This project is licensed under [MIT](https://github.com/South-Paw/react-vector-maps/blob/master/LICENSE)

```
The MIT License (MIT)

Copyright (c) 2018 Alex Gabites

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
