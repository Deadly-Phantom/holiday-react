"use client";
import TopBar from "@/components/TopBar";
import Details from "@/components/Details";
import SummaryCard from "@/components/SummaryCard";
import Gallery from "@/components/Gallery";
import ActionBar from "@/components/ActionBar";
import FullWidthImage from "@/components/FullWidthImage";

export default function Home() {
  return (
    <>
      <TopBar />
      <ActionBar />
      <SummaryCard />
      <Details />
      <FullWidthImage />
      <Gallery />
    </>
  );
}
