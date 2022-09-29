import { darken, rgba } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: 24px;
    color: ${(p) => p.theme.colors.dark};
    background-color: ${(p) => p.theme.colors.alt};
  }

  h1 {
    margin: 0;
    margin-bottom: 16px;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
  }

  h2 {
    margin: 0;
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: 600;
    line-height: 32px;
  }

  h3 {
    margin: 0;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
  }

  h4 {
    margin: 0;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  h5 {
    margin: 0;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  h6 {
    margin: 0;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  p {
    margin-bottom: 16px;
  }

  a {
    color: ${(p) => p.theme.colors.primary};
    text-decoration: none;

    &:focus,
    &:hover {
      color: ${(p) => darken(0.2, p.theme.colors.primary)};
      text-decoration: underline;
    }

    &:active {
      color: ${(p) => darken(0.2, p.theme.colors.primary)};
    }
  }

  ul, ol {
    margin-bottom: 16px;
    padding-left: 32px;

    ul, ol {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }

  hr {
    margin: 32px 0;
    height: 2px;
    background-color: ${(p) => rgba(p.theme.colors.dark, 0.13)};
    border: none;
  }

  code {
    padding: 1px 6px;
    background-color: ${(p) => rgba(p.theme.colors.black, 0.075)};
    border-radius: 2px;
  }

  pre {
    padding: 8px;
    background-color: ${(p) => rgba(p.theme.colors.black, 0.075)};
    border-radius: 2px;

    code {
      padding: 0;
      display: block;
      background-color: transparent;
      border-radius: none;
    }
  }

  table {
    margin: 16px 0;
    width: 100%;
    border: 1px solid ${(p) => rgba(p.theme.colors.dark, 0.13)};
    border-spacing: 0;

    tr {
      th,td {
        padding: 4px;
        border: 1px solid ${(p) => rgba(p.theme.colors.dark, 0.13)};
      }
    }
  }
`;
