import React, { useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider, LiveProviderProps } from 'react-live';
import { Button, Editor, Error, Preview, StyledExample, Toolbar } from './styled';

export interface ExampleProps extends Omit<LiveProviderProps, 'ref'> {
  isOpen?: boolean;
  code: string;
}

export function Example({ isOpen = false, code, ...other }: ExampleProps) {
  const [showCode, setShowCode] = useState(isOpen);

  return (
    <StyledExample>
      <Toolbar>
        <Button onClick={() => setShowCode(!showCode)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              fill="currentColor"
              d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
            />
          </svg>
          {showCode ? 'Hide code' : 'Show code'}
        </Button>
      </Toolbar>
      <LiveProvider code={code} {...other}>
        <Editor isOpen={showCode}>
          <LiveEditor />
        </Editor>
        <Error>
          <LiveError />
        </Error>
        <Preview>
          <LivePreview />
        </Preview>
      </LiveProvider>
    </StyledExample>
  );
}
