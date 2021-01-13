import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Reset } from './Reset';
import { system } from './system';

const Theme = ({ children }) => (
  <ThemeProvider theme={system}>
    <>
      <Normalize />
      <Reset />
      {children}
    </>
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Theme };
