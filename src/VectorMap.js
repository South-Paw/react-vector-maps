import React from 'react';
import PropTypes from 'prop-types';

const VectorMap = ({ id, name, layers, tabIndex, layerProps, checkedLayers, currentLayers, ...other }) => {
  if (!layers) {
    console.error(`[react-vector-maps] No 'layers' prop provided. Did you spread a map object onto the component?`);
    return null;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" key={id} aria-label={name} {...other}>
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
};

VectorMap.propTypes = {
  /** Unique ID of the SVG element. */
  id: PropTypes.string.isRequired,
  /** Name of the map. */
  name: PropTypes.string.isRequired,
  /** View box for the map. */
  viewBox: PropTypes.string.isRequired,
  /** Layers that represent the regions of the map. */
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      /** Unique ID of each layer. */
      id: PropTypes.string.isRequired,
      /** Name of the layer. */
      name: PropTypes.string,
      /** SVG path for the layer. */
      d: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /** Tab index for each layer. Set to '-1' to disable layer focusing. */
  tabIndex: PropTypes.number,
  /** Props to spread onto each layer. */
  layerProps: PropTypes.object,
  /** Layer IDs to 'select' with the 'aria-checked' attribute. */
  checkedLayers: PropTypes.arrayOf(PropTypes.string),
  /** Layer IDs to 'select' with the 'aria-current' attribute. */
  currentLayers: PropTypes.arrayOf(PropTypes.string),
};

VectorMap.defaultProps = {
  tabIndex: 0,
  layerProps: null,
  checkedLayers: null,
  currentLayers: null,
};

export { VectorMap };
