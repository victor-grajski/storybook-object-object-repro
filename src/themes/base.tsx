import { createTheme } from "@mui/material/styles";
import type {} from '@mui/lab/themeAugmentation';

// create a base theme to contain colors so that the createMuiTheme function can reference
// consistent color variables instead of defining them individually
const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#3399FF",
      light: "#C9E4FF",
      dark: "#005CB8",
      contrastText: "#f8fbff",
    },
  },
  shape: {
    borderRadius: 4,
  },
});

const theme = createTheme({
  ...baseTheme,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          html: {
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            backgroundColor: "#020307",
            color: "#F8FBFF",
          },
          body: {
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            backgroundColor: "#020307",
            color: "#F8FBFF",
            fontSize: "1rem",
          },
          a: {
            color: "#3399FF",
            textDecoration: "none",
            "&:hover": {
              color: "#C9E4FF",
            },
          },
          label: {
            color: "#9da0b0",
          },
        },
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#F8FBFF",
        },
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          verticalAlign: "text-bottom",
        },
      }
    },
  },
});

export default theme;
