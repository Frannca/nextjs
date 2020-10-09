import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }
  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`

export default GlobalStyles
