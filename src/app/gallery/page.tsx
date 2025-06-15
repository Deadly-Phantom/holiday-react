"use client";
import TopBar from "@/components/TopBar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useStore } from "@/store";
import { tristanDarkTheme, tristanLightTheme } from "@/theme";

export default function Home() {
  const myTheme = useStore((state) => state.myTheme);
  return (
    <ThemeProvider
      theme={myTheme === "dark" ? tristanDarkTheme : tristanLightTheme}
      noSsr
    >
      <CssBaseline />
      <TopBar />

      <Gallery />
      <Footer />
    </ThemeProvider>
  );
}
