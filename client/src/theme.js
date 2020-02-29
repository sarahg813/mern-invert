import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: "#7986cb",
    secondary: {
      main: "#f50057"
    }
  },
  typography: {
    fontFamily: '"Arapey","Roboto Condensed", "Rochester", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  button: {
    color: "#ffffff"
  }
});

export default theme;
