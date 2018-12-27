import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { darken, rgba } from 'polished';

/* normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
const normalize = `
  html{line-height:1.15;-webkit-text-size-adjust:100%}
  body{margin:0}
  main{display:block}
  h1{font-size:2em;margin:.67em 0}
  hr{box-sizing:content-box;height:0;overflow:visible}
  pre{font-family:monospace,monospace;font-size:1em}
  a{background-color:transparent}
  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
  b,strong{font-weight:bolder}
  code,kbd,samp{font-family:monospace,monospace;font-size:1em}
  small{font-size:80%}
  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
  sub{bottom:-.25em}
  sup{top:-.5em}
  img{border-style:none}
  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}
  button,input{overflow:visible}
  button,select{text-transform:none}
  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}
  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}
  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}
  fieldset{padding:.35em .75em .625em}
  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}
  progress{vertical-align:baseline}
  textarea{overflow:auto}
  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}
  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}
  [type=search]::-webkit-search-decoration{-webkit-appearance:none}
  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
  details{display:block}
  summary{display:list-item}
  template{display:none}
  [hidden]{display:none}
`;

const headerStyle = `
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const fontScale1 = `font-size: 2.441rem;`;
const fontScale2 = `font-size: 1.953rem;`;
const fontScale3 = `font-size: 1.563rem;`;
const fontScale4 = `font-size: 1.25rem;`;
const fontScale5 = `font-size: 1rem;`;
const fontScale6 = `font-size: 0.8rem;`;

const Reset = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: 1.5;
    color: #000;
  }

  body {
    background: #fff;
  }

  h1 {
    ${headerStyle}
    ${fontScale1}
  }

  h2 {
    ${headerStyle}
    ${fontScale2}
  }

  h3 {
    ${headerStyle}
    ${fontScale3}
  }

  h4 {
    ${headerStyle}
    ${fontScale4}
  }

  h5 {
    ${headerStyle}
    ${fontScale5}
  }

  h6 {
    ${headerStyle}
    ${fontScale6}
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    background-color: transparent;
    color: #116ad8;
    text-decoration: none;

    &:focus,
    &:hover {
      color: ${darken(0.2, '#116ad8')};
      text-decoration: underline;
    }
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;

    ul, ol {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  hr {
    margin: 1rem 0;
    height: 0.2rem;
    background: ${rgba('#000', 0.15)};
    border: none;
  }

  blockquote {
    margin: 0 0 1rem 1rem;
    padding: 0.25rem 0 0.25rem 1rem;
    border-left: 0.2rem solid ${rgba('#000', 0.15)};

    p:last-child {
      margin-bottom: 0;
    }
  }

  code {
    padding: 0.05rem 0.4rem;
    background-color: ${rgba('#000', 0.075)};
  }

  pre {
    margin: 0;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: ${rgba('#000', 0.075)};
    font-size: 0.8rem;

    code {
      padding: 0;
      background-color: transparent;
    }
  }

  table {
    border-spacing: 0;

    td, th {
      padding: 0.5rem;
      text-align: left;
    }

    th {
      border-bottom: 0.1rem solid ${rgba('#000', 0.15)};
    }
  }
`;

const Wrapper = storyFn => (
  <>
    <Reset />

    <div style={{ padding: '1rem', width: '100%', maxWidth: '960px', margin: '0 auto' }}>
      {storyFn()}
    </div>
  </>
);

export default Wrapper;
