import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Wrapper, Output, MapWrapper } from './styled';

const StyledMap = styled(MapWrapper)`
  svg {
    path {
      fill: #2b3595;
      cursor: pointer;

      &:focus,
      &:hover {
        fill: #7045af;
      }

      &[aria-checked='true'] {
        fill: #e14594;
      }
    }
  }
`;

import VectorMap from '../index';

class SelectMultiple extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hovered: null,
      focused: null,
      clicked: null,
      selected: [],
    };
  }

  onMouseEnter = e => this.setState({ hovered: e.target.attributes.name.value });

  onMouseLeave = () => this.setState({ hovered: null });

  onFocus = e => this.setState({ focused: e.target.attributes.name.value });

  onBlur = () => this.setState({ focused: null });

  onClick = e => {
    const { selected } = this.state;
    const id = e.target.attributes.id.value;

    let newSelection = null;

    if (selected.includes(id)) {
      newSelection = selected.filter(layerId => layerId !== id);
    } else {
      newSelection = [...selected, id];
    }

    this.setState({ selected: newSelection, clicked: e.target.attributes.name.value });
  };

  render() {
    const { map } = this.props;
    const { hovered, focused, clicked, selected } = this.state;

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
          <p>
            <strong>Selected layers:</strong>
          </p>
          <pre>{JSON.stringify(selected, null, 2)}</pre>
        </Output>
        <StyledMap>
          <VectorMap {...map} layerProps={layerProps} checkedLayers={selected} />
        </StyledMap>
      </Wrapper>
    );
  }
}

SelectMultiple.propTypes = {
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

export default SelectMultiple;
