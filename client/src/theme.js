import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff"
    }
  },
  typography: {
    fontFamily:
      '"Montserrat", "Playfair Display", "Righteous", "Yeseva One", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    button: {
      textTransform: "none"
    }
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: "#e14eca" //pink
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#fff",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "#fff"
          }
        },
        "&$focused $notchedOutline": {
          borderColor: "#1d8cf8", //blue
          borderWidth: 1
        }
      }
    },
    MuiFormLabel: {
      root: {
        // "&$focused": {
        color: "#fff"
        // }
      }
    }
  }
});

export default theme;
