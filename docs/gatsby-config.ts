import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'React Vector Maps',
    siteUrl: 'https://react-vector-maps.netlify.app',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/maps`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'React Vector Maps',
        short_name: 'React Vector Maps',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#a82b2b',
        display: 'minimal-ui',
        icon: 'src/images/world-map.png',
      },
    },
  ],
  graphqlTypegen: true,
};

export default config;
