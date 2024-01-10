import { createTheme } from "@mui/material/styles";
import { blue, cyan } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
        main: cyan[500]
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 950,
      lg: 1250,
      xl: 1500
    }
  }
});
