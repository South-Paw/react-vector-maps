import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import { Layout } from '../components/Layout';

const seo = {
  title: 'Maps',
};

const MapsProps = ({
  data: {
    allMapsJson: { edges },
  },
}) => (
  <Layout seo={seo}>
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
        <li>
          <a href={`/maps/${id}.json`} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </li>
      ))}
    </ul>
  </Layout>
);

MapsProps.propTypes = {
  data: PropTypes.shape({
    allMapsJson: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

MapsProps.defaultProps = {};

export default MapsProps;

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
