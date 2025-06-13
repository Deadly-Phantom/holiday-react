"use client";
import TopBar from "@/components/TopBar";
import Gallery from "@/components/Gallery";
import FullWidthImage from "@/components/FullWidthImage";
import Footer from "@/components/Footer";
import ActionBar from "@/components/ActionBar";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const tristanDarkTheme = createTheme({
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
const tristanLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2979ff",
      dark: "#651fff",
      contrastText: "rgba(10,11,26,0.87)",
      light: "#40c4ff",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={tristanDarkTheme} noSsr>
      <CssBaseline />
      <TopBar />
      <FullWidthImage />
      <ActionBar />
      <Gallery />
      <Footer />
    </ThemeProvider>
  );
}
