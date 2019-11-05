import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEO = ({ location: { pathname }, name, title, description, keywords, type, basepath }) => (
  <Helmet titleTemplate={`%s · ${name}`}>
    <html lang="en" />

    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(', ')} />

    <link rel="canonical" href={`${basepath}${pathname}`} />

    <meta property="og:site_name" content={name} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={`${basepath}${pathname}`} />
  </Helmet>
);

SEO.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }),
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  basepath: PropTypes.string,
};

SEO.defaultProps = {
  location: { pathname: '/' },
  name: 'React Vector Maps',
  description: '',
  keywords: [],
  type: 'website',
  basepath: '',
};

export { SEO };
