import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Reset } from './Reset';
import { system } from './system';

export function Theme({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={system}>
      <>
        <Normalize />
        <Reset />
        {children}
      </>
    </ThemeProvider>
  );
}
