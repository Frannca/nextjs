import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#141415'
    },
    secondary: {
      main: '#bb2225'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
})

export default theme
