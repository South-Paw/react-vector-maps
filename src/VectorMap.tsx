import React from 'react';

export interface VectorMapLayer {
  /** Unique ID of each layer. */
  id: string;
  /** Name of the layer. */
  name: string;
  /** SVG path for the layer. */
  d: string;
}

export interface VectorMapProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
  /** Unique ID of the SVG element. */
  id: string;
  /** Name of the map. */
  name: string;
  /** View box for the map. */
  viewBox: string;
  /** Layers that represent the regions of the map. */
  layers: VectorMapLayer[];
  /** Tab index for each layer. Set to '-1' to disable layer focusing. */
  tabIndex?: number;
  /** Props to spread onto each layer. */
  layerProps?: React.SVGProps<SVGPathElement>;
  /** Layer IDs to 'select' with the 'aria-checked' attribute. */
  checkedLayers?: string[];
  /** Layer IDs to 'select' with the 'aria-current' attribute. */
  currentLayers?: string[];
}

export function VectorMap({
  id,
  name,
  layers,
  tabIndex = 0,
  layerProps,
  checkedLayers,
  currentLayers,
  children,
  ...other
}: VectorMapProps) {
  if (!layers || layers.length === 0) {
    // eslint-disable-next-line no-console
    console.error(
      `[@south-paw/react-vector-maps] No 'layers' prop provided. Did you spread a map object onto the component?`,
    );
    return null;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" key={id} aria-label={name} {...other}>
      {children}
      {layers.map((layer) => (
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
}
