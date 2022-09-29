import { HeadProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';

export function Head(props: HeadProps) {
  return <Seo {...props} title="Page Not Found" />;
}

export default function NotFoundPage() {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>404 Not Found 🤷‍♂️</h1>
    </Layout>
  );
}
