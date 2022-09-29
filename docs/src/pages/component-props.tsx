import { HeadProps } from 'gatsby';
import * as React from 'react';
import { uid } from 'react-uid';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';

const ResponsiveTable = styled.div`
  overflow: auto;
`;

interface PropTableProps {
  items: Array<{
    prop?: string;
    type?: string;
    required?: boolean;
    defaultProp?: string;
    description?: string;
  }>;
}

function PropTable({ items }: PropTableProps) {
  return (
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
          {items.map((item, id) => (
            <tr key={uid(item, id)}>
              <td>{item.prop && <code>{item.prop}</code>}</td>
              <td>{item.type && <code>{item.type}</code>}</td>
              <td style={{ textAlign: 'center' }}>{item.required && '✔️'}</td>
              <td>{item.defaultProp && <code>{item.defaultProp}</code>}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ResponsiveTable>
  );
}

export function Head(props: HeadProps) {
  return <Seo {...props} title="Component Props" />;
}

export default function ComponentPropsPage() {
  return (
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
}
