import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

import Wrapper from './components/Wrapper';

const req = require.context('../src', true, /story\.js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

addDecorator(Wrapper);

addDecorator(withOptions({
  name: '🗺️ react-vector-maps',
  url: 'https://github.com/South-Paw/react-vector-maps',
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  showAddonPanel: false,
}));

configure(loadStories, module);
