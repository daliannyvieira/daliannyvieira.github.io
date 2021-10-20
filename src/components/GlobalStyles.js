import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html {
    background: var(--color-background);
    color: var(--color-text);
  }
  a {
    color: var(--color-secondary);
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
  }

  html {
    font-size: 16px;
  }

  @media (min-width: 2560px) {
    html {
      font-size: 30px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Source Serif Pro', serif;
    color: var(--color-title)
  }

  h1 {
    font-size: 2rem;
    line-height: 2.25rem;
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 3.625rem;
      line-height: 3.48rem;
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
    font-size: 1rem;
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.8rem;
  }

  img {
    max-width: 100%;
  }

  ul {
    font-size: 1rem;
    line-height: 1.8em;
  }

  ::selection {
    background: #F583BA;
    color: #fff;
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
    margin: 0.8em auto;
  }

  blockquote::before {
    content: "";
    display: block;
    width: 40%;
    margin: 2rem auto 1rem;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }

  blockquote::after {
    content: "";
    display: block;
    width: 40%;
    margin: 1rem auto 2rem;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 992px) {
    blockquote {
      max-width: 70%;
    }

    blockquote p {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
  }
`;

export default GlobalStyles;