import { createTheme } from "@mui/material";

export const tristanDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#09ebec",
      dark: "#1052f5",
      contrastText: "rgba(10,11,26,0.87)",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
export const tristanLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2979ff',
      dark: '#651fff',
      contrastText: 'rgba(10,11,26,0.87)',
      light: '#40c4ff',
    },
    secondary: {
      main: '#f50057',
    },
  },
});