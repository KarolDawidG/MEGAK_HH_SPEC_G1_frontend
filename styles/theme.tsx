
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#222224',
    },
    primary: {
      main: '#E02735',


    },

  },
  typography: {
    button: {
      textTransform: 'none'
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            color: "white"
          })
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {

          borderBottom: '0px solid var(--TextField-brandBorderColor)',
          borderRadius: 0
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 0
          })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: 0,
          borderWidth: 0,
        }

      }
    }
  }
}
);

export default theme;