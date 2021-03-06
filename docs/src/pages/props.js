import PropTypes from 'prop-types';
import React from 'react';
import { uid } from 'react-uid';
import styled from 'styled-components';
import { Layout } from '../components/Layout';

const ResponsiveTable = styled.div`
  overflow: auto;
`;

const PropTable = ({ items }) => (
  <ResponsiveTable>
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ prop, type, required, defaultProp, description }, id) => (
          <tr key={uid({ prop, type, required, defaultProp, description }, id)}>
            <td>{prop && <code>{prop}</code>}</td>
            <td>{type && <code>{type}</code>}</td>
            <td style={{ textAlign: 'center' }}>{required && <>✔️</>}</td>
            <td>{defaultProp && <code>{defaultProp}</code>}</td>
            <td>{description && <>{description}</>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </ResponsiveTable>
);

PropTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      prop: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      required: PropTypes.bool.isRequired,
      defaultProp: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const PropsPage = () => (
  <Layout>
    <h2>
      <a href="//github.com/South-Paw/react-vector-maps/blob/master/src/VectorMap.tsx#L12">VectorMapProps</a>
    </h2>
    <PropTable
      items={[
        {
          prop: 'id',
          type: 'string',
          required: true,
          defaultProp: '',
          description: 'Unique ID of the SVG element.',
        },
        {
          prop: 'name',
          type: 'string',
          required: true,
          defaultProp: '',
          description: 'Name of the map.',
        },
        {
          prop: 'viewBox',
          type: 'string',
          required: true,
          defaultProp: '',
          description: 'View box for the map.',
        },
        {
          prop: 'layers',
          type: 'VectorMapLayer[]',
          required: true,
          defaultProp: '',
          description: 'Layers that represent the regions of the map.',
        },
        {
          prop: 'tabIndex',
          type: 'number',
          required: false,
          defaultProp: '0',
          description: `Tab index for each layer. Set to '-1' to disable layer focusing.`,
        },
        {
          prop: 'layerProps',
          type: 'object',
          required: false,
          defaultProp: '',
          description: 'Props to spread onto each layer.',
        },
        {
          prop: 'checkedLayers',
          type: 'string[]',
          required: false,
          defaultProp: '',
          description: `Layer IDs to 'select' with the 'aria-checked' attribute.`,
        },
        {
          prop: 'currentLayers',
          type: 'string[]',
          required: false,
          defaultProp: '',
          description: `Layer IDs to 'select' with the 'aria-current' attribute.`,
        },
      ]}
    />

    <hr />

    <h3>
      <a href="//github.com/South-Paw/react-vector-maps/blob/master/src/VectorMap.tsx#L3">VectorMapLayer</a>
    </h3>
    <PropTable
      items={[
        {
          prop: 'id',
          type: 'string',
          required: true,
          defaultProp: '',
          description: `Unique ID of each layer.`,
        },
        {
          prop: 'name',
          type: 'string',
          required: false,
          defaultProp: '',
          description: `Name of the layer.`,
        },
        {
          prop: 'd',
          type: 'string',
          required: true,
          defaultProp: '',
          description: `SVG path for the layer.`,
        },
      ]}
    />
  </Layout>
);

export default PropsPage;
