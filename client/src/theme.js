import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: "#0f0d0d"
    }
  },
  typography: {
    fontFamily: '"Montserrat","Righteous", "Yeseva One", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    button: {
      textTransform: "none"
    }
  }
});

export default theme;
