import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';

import Wrapper from './components/Wrapper';

const req = require.context('../src', true, /story\.js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

addDecorator(Wrapper);

const theme = create({
  brandTitle: '🗺️ react-vector-maps',
  brandUrl: 'https://github.com/South-Paw/react-vector-maps',
});

addParameters({
  options: {
    showPanel: false,
    theme,
  },
});

configure(loadStories, module);
