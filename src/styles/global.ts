import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }

  html, body, #__next {
    height: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`

export default GlobalStyles
