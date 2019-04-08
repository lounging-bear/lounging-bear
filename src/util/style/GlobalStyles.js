import { createGlobalStyle } from './index'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'AzoSansRegular';
    src:  url('./fonts/AzoSans-Regular.ttf'),
         url('./fonts/azosans-regular-webfont.woff2') format('woff2'),
         url('./fonts/azosans-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyles
