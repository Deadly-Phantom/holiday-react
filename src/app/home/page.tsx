"use client";
import TopBar from "@/components/TopBar";
import Gallery from "@/components/Gallery";
import FullWidthImage from "@/components/FullWidthImage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <FullWidthImage />
      <Gallery />
      <Footer />
    </>
  );
}
