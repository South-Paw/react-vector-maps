import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';

export function Markdown(props: ReactMarkdownOptions) {
  return <ReactMarkdown {...props} />;
}
