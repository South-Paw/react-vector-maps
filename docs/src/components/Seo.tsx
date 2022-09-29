import { HeadProps } from 'gatsby';
import React from 'react';

import config from '../../gatsby-config';

export interface SeoProps extends HeadProps {
  title: string;
  description?: string;
  keywords?: string[];
}

export function Seo({ location: { pathname }, title, description, keywords }: SeoProps) {
  const canonical = `${config.siteMetadata?.siteUrl as string}${pathname}`;

  return (
    <>
      <title>
        {title} · {config.siteMetadata?.title as string}
      </title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}

      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={config.siteMetadata?.title as string} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
    </>
  );
}
