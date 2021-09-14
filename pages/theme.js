import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
      primary: {
        light: "#35baf6",
        main: "#03a9f4",
        dark: "#0276aa"

      },
      secondary: {
        main: "#0f0"
      }
  }
})

export default theme;

