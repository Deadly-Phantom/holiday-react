"use client";
import TopBar from "@/components/TopBar";
import Gallery from "@/components/Gallery";
import FullWidthImage from "@/components/FullWidthImage";
import Footer from "@/components/Footer";
import ActionBar from "@/components/ActionBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <FullWidthImage />
      <ActionBar />
      <Gallery />
      <Footer />
    </>
  );
}
