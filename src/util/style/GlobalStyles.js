import { createGlobalStyle } from './index'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
  }

  @font-face {
      font-family: 'Azo Sans Md';
      src: url('./AzoSans/AzoSans-Medium.eot');
      src: url('./AzoSans/AzoSans-Medium.eot?#iefix') format('embedded-opentype'),
          url('./AzoSans/AzoSans-Medium.woff2') format('woff2'),
          url('./AzoSans/AzoSans-Medium.woff') format('woff'),
          url('./AzoSans/AzoSans-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Azo Sans';
      src: url('./AzoSans/AzoSans-Bold.eot');
      src: url('./AzoSans/AzoSans-Bold.eot?#iefix') format('embedded-opentype'),
          url('./AzoSans/AzoSans-Bold.woff2') format('woff2'),
          url('./AzoSans/AzoSans-Bold.woff') format('woff'),
          url('./AzoSans/AzoSans-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }


`

export { GlobalStyles }
