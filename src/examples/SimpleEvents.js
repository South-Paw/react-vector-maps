import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Wrapper, Output, MapWrapper } from './styled';

const StyledMap = styled(MapWrapper)`
  svg {
    path {
      fill: #36622b;
      cursor: pointer;

      &:focus,
      &:hover {
        fill: #729d39;
      }

      &[aria-checked='true'] {
        fill: #c6e377;
      }
    }
  }
`;

import VectorMap from '../index';

class SimpleEvents extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hovered: null,
      focused: null,
      clicked: null,
    };
  }

  /** When the mouse enters a layer. */
  onMouseEnter = e => this.setState({ hovered: e.target.attributes.name.value });

  /** When the mouse leaves a layer. */
  onMouseLeave = () => this.setState({ hovered: null });

  /** When a layer gains focus. */
  onFocus = e => this.setState({ focused: e.target.attributes.name.value });

  /** When a layer looses focus. */
  onBlur = () => this.setState({ focused: null });

  /** When a layer is clicked. */
  onClick = e => this.setState({ clicked: e.target.attributes.name.value });

  render() {
    const { map } = this.props;
    const { hovered, focused, clicked } = this.state;

    const layerProps = {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onClick,
    };

    return (
      <Wrapper>
        <Output>
          <p>
            <strong>Hovered layer:</strong> {hovered}
          </p>
          <p>
            <strong>Focused layer:</strong> {focused}
          </p>
          <p>
            <strong>Clicked layer:</strong> {clicked}
          </p>
        </Output>
        <StyledMap>
          <VectorMap {...map} layerProps={layerProps} />
        </StyledMap>
      </Wrapper>
    );
  }
}

SimpleEvents.propTypes = {
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

export default SimpleEvents;
