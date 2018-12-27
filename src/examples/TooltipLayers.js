import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Wrapper, MapWrapper } from './styled';

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

const Tooltip = styled.div`
  position: absolute;
  padding: 0.25rem;
  background: white;
  border: 0.2rem solid #ccc;
`;

import VectorMap from '../index';

class TooltipLayers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      current: null,
      isTooltipVisible: false,
      tooltipY: 0,
      tooltipX: 0,
    };
  }

  onMouseOver = e => this.setState({ current: e.target.attributes.name.value });

  onMouseMove = e =>
    this.setState({
      isTooltipVisible: true,
      tooltipY: e.clientY + 10,
      tooltipX: e.clientX + 10,
    });

  onMouseOut = () => this.setState({ current: null, isTooltipVisible: false });

  render() {
    const { map } = this.props;
    const { current, isTooltipVisible, tooltipX, tooltipY } = this.state;

    const layerProps = {
      onMouseOver: this.onMouseOver,
      onMouseMove: this.onMouseMove,
      onMouseOut: this.onMouseOut,
    };

    const tooltipStyle = {
      display: isTooltipVisible ? 'block' : 'none',
      top: tooltipY,
      left: tooltipX,
    };

    return (
      <Wrapper>
        <StyledMap style={{ margin: '0 auto', maxWidth: '400px' }}>
          <p style={{ textAlign: 'center' }}>
            <strong>Mouse over a region to see the tooltip.</strong>
          </p>
          <VectorMap {...map} layerProps={layerProps} />
          <Tooltip style={tooltipStyle}>{current}</Tooltip>
        </StyledMap>
      </Wrapper>
    );
  }
}

TooltipLayers.propTypes = {
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

export default TooltipLayers;
