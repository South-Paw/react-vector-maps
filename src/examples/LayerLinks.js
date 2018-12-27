import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Wrapper, MapWrapper } from './styled';

const StyledMap = styled(MapWrapper)`
  svg {
    path {
      fill: #1a3263;
      cursor: pointer;

      &:hover {
        fill: #f5564e;
      }

      &:focus {
        fill: #fab95b;
      }
    }
  }
`;

import VectorMap from '../index';

class LayerLinks extends PureComponent {
  onClick = e => {
    const name = e.target.attributes.name.value;
    window.open(`https://www.google.com/search?q=${name}%20nz`);
  };

  render() {
    const { map } = this.props;

    const layerProps = {
      onClick: this.onClick,
    };

    return (
      <Wrapper>
        <StyledMap style={{ margin: '0 auto', maxWidth: '400px' }}>
          <p style={{ textAlign: 'center' }}>
            <strong>
              Click on a region to Google it.
              <br />
              Links will open in a new tab.
            </strong>
          </p>
          <VectorMap {...map} layerProps={layerProps} />
        </StyledMap>
      </Wrapper>
    );
  }
}

LayerLinks.propTypes = {
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

export default LayerLinks;
