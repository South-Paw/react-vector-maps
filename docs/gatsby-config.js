module.exports = {
  siteMetadata: {
    title: `React Vector Maps`,
    description: `🗺️ React component for interactive vector maps of the world and 100+ countries`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/maps`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React Vector Maps`,
        short_name: `React Vector Maps`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#a82b2b`,
        display: `minimal-ui`,
        icon: `src/images/world-map.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
