"use client";
import TopBar from "@/components/TopBar";
import FullWidthImage from "@/components/FullWidthImage";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
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
      <FullWidthImage />
      <Card>
        <CardHeader title="Croatia" subheader={+new Date()} />
        <CardContent></CardContent>
      </Card>
      <Footer />
    </ThemeProvider>
  );
}
