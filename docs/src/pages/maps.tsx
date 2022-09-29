import { graphql, HeadProps, Link, PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';

export function Head(props: HeadProps) {
  return <Seo {...props} title="Maps" />;
}

export default function MapsPage({
  data: {
    allMapsJson: { edges },
  },
}: PageProps<{
  allMapsJson: {
    edges: Array<{
      node: {
        id: string;
        name: string;
      };
    }>;
  };
}>) {
  return (
    <Layout>
      <h2>Maps</h2>
      <p>
        The following maps were created by{' '}
        <a href="https://mapsvg.com/maps" target="_blank" rel="noopener noreferrer">
          MapSVG
        </a>{' '}
        and have been converted to the correct JSON format so they are ready to use with the VectorMap component.
      </p>
      <p>
        Can&apos;t find what you&apos;re looking for? You can always create your own SVG and convert it using the{' '}
        <Link to="/converter">online SVG to JSON converter</Link>.
      </p>
      <ul style={{ columns: '180px auto' }}>
        {edges.map(({ node: { id, name } }) => (
          <li key={id}>
            <a href={`/maps/${id}.json`} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  {
    allMapsJson(sort: { fields: name, order: ASC }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
