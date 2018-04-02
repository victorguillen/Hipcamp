import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Calibre', Helvetica, Arial, sans-serif
  }

  body.fontLoaded {
    font-family: 'Calibre', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #FFF;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
