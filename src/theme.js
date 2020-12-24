// Need to use the unstable version because the current version of Material-UI does not work well with React.StrictMode
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
  }
})
