import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Wrapper, MapWrapper } from './styled';

const StyledMap = styled(MapWrapper)`
  padding: 1rem;
  background-color: #132238;

  // The root svg element of the vector map.
  svg {
    stroke: #132238;

    // All layers are just path elements.
    path {
      fill: #364e68;
      cursor: pointer;

      // When a layer is hovered.
      &:hover {
        fill: #98ccd3;
      }

      // When a layer is focused.
      &:focus {
        fill: #ebf0f6;
      }

      // When a layer is 'checked' (via 'aria-checked').
      &[aria-checked='true'] {
        fill: #8f1537;
      }

      // When a layer is 'selected' (via 'aria-current').
      &[aria-current='true'] {
        fill: #a275e3;
      }
    }
  }
`;

import VectorMap from '../index';

const MapStyling = ({ map }) => (
  <Wrapper style={{ flexFlow: 'nowrap column' }}>
    <p style={{ textAlign: 'center' }}>
      <strong>
        See comments in the source below for an example or check the readme on Github for more info about what css
        classes/elements to target.
      </strong>
    </p>
    {/* Wrap the map in your element or a div with a css class on it. */}
    <StyledMap style={{ width: '100%', margin: '0 auto', maxWidth: '400px' }}>
      <VectorMap {...map} />
    </StyledMap>
  </Wrapper>
);

MapStyling.propTypes = {
  map: PropTypes.shape({
    id: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    layers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        d: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default MapStyling;
