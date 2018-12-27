import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Wrapper, Output, MapWrapper } from './styled';

const StyledMap = styled(MapWrapper)`
  svg {
    path {
      fill: #3d0043;
      cursor: pointer;

      &:hover {
        fill: #90007f;
      }

      &[aria-current='true'] {
        fill: #d52484;
      }
    }
  }
`;

import VectorMap from '../index';

class HighlightLayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      current: null,
    };
  }

  setCurrent = id => this.setState({ current: [id] });

  clearCurrent = () => this.setState({ current: null });

  render() {
    const { map } = this.props;
    const { current } = this.state;

    return (
      <Wrapper>
        <Output>
          <p>
            <strong>Hover on a list item to highlight the layer:</strong>
          </p>
          <ul>
            <li onMouseEnter={() => this.setCurrent('nz-auk')} onMouseLeave={() => this.clearCurrent()}>
              <code>Auckland</code>
            </li>
            <li onMouseEnter={() => this.setCurrent('nz-wgn')} onMouseLeave={() => this.clearCurrent()}>
              <code>Wellington</code>
            </li>
            <li onMouseEnter={() => this.setCurrent('nz-can')} onMouseLeave={() => this.clearCurrent()}>
              <code>Canterbury</code>
            </li>
          </ul>
        </Output>
        <StyledMap>
          <VectorMap {...map} currentLayers={current} />
        </StyledMap>
      </Wrapper>
    );
  }
}

HighlightLayer.propTypes = {
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

export default HighlightLayer;
