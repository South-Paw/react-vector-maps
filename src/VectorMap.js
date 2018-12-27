import React from 'react';
import PropTypes from 'prop-types';

const VectorMap = ({ layers, tabIndex, layerProps, checkedLayers, currentLayers, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" key={rest.id} {...rest}>
    {layers.map(layer => (
      <path
        key={layer.id}
        tabIndex={tabIndex}
        aria-label={layer.name}
        aria-checked={checkedLayers && checkedLayers.includes(layer.id)}
        aria-current={currentLayers && currentLayers.includes(layer.id)}
        {...layer}
        {...layerProps}
      />
    ))}
  </svg>
);

VectorMap.propTypes = {
  /** Used to key the svg element. */
  id: PropTypes.string.isRequired,
  /** Name for the visible map. */
  name: PropTypes.string,
  /** View box for the visible map. */
  viewBox: PropTypes.string.isRequired,
  /** Layers or regions of the visible map. */
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      /** Used to key the path element. */
      id: PropTypes.string.isRequired,
      /** Name for this layer or region. */
      name: PropTypes.string,
      /** Svg path for this layer or region. */
      d: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /** Tab index for each layer, set to `-1` to disable focus. */
  tabIndex: PropTypes.string,
  /** Props to pass onto each layer. */
  layerProps: PropTypes.object,
  /** Layer ids to `select` with the `aria-checked` attribute. */
  checkedLayers: PropTypes.arrayOf(PropTypes.string),
  /** Layer ids to `highlight` with the `aria-current` attribute. */
  currentLayers: PropTypes.arrayOf(PropTypes.string),
};

VectorMap.defaultProps = {
  name: null,
  tabIndex: '0',
  layerProps: null,
  checkedLayers: null,
  currentLayers: null,
};

export default VectorMap;
