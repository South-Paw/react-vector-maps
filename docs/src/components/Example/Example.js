import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { StyledExample, Toolbar, Button, Editor, Error, Preview } from './styled';

const Example = ({ isOpen, code, ...other }) => {
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
};

Example.propTypes = {
  code: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
};

Example.defaultProps = {
  isOpen: false,
};

export { Example };
