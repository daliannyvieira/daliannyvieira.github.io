import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    background: var(--color-background);
    color: var(--color-text);
    font-size: 16px;
  }

  @media (min-width: 2560px) {
    html {
      font-size: 30px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    font-weight: normal;
    word-wrap: break-word;
    font-weight: 600;
    transition: background ease 0.2s;
    background: var(--color-background);
    color: var(--color-text);
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Source Serif Pro', serif;
    color: var(--color-title);
    margin: 4rem 0 1rem;
  }

  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: var(--color-primary);
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 3.625rem;
      line-height: 3.88rem;
    }
  }

  h2 {
    font-size: 1.885rem;
    line-height: 2.465rem;
  }

  h3 {
    font-size: 1.45rem;
    line-height: 1.75rem;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 2rem;
  }

  p {
    font-size: 1.15rem;
    line-height: 2rem;
    margin: 1rem 0;
  }

  ol, ul {
    font-size: 1.15rem;
    line-height: 2rem;
  }

  ::marker {
    color: var(--color-primary);
  }

  ::selection {
    background: #F583BA;
    color: #fff;
  }

  a {
    color: var(--color-secondary);
    cursor: pointer;
  }

  blockquote {
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  blockquote p {
    font-family: 'Source Serif Pro', serif;
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.65rem;
    display: inline-block;
  }

  blockquote::before {
    content: "";
    display: block;
    width: 40%;
    margin: 4rem auto 1rem;
    border-top: 2px solid var(--color-secondary);
  }

  blockquote::after {
    content: "";
    display: block;
    width: 40%;
    margin: 1rem auto 4rem;
    border-top: 2px solid var(--color-secondary);
  }

  @media (min-width: 992px) {
    blockquote {
      max-width: 75%;
    }

    blockquote p {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
  }

  img {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  textarea {
    white-space: revert;
  }
`;

export default GlobalStyles;