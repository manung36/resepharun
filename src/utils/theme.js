import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const base = createTheme({
  palette: {
    primary: {
      main: "#ff5154",
      
    },
    secondary: {
      main: "#941315",
      
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    button: {
      fontWeight: 666,
    },
  },

  shape: {
    borderRadius: 36,
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
