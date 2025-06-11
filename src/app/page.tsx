"use client";
import Image from "next/image";
import styles from "./page.module.css";
import TopBar from "@/components/TopBar";
import Details from "@/components/Details";
import SummaryCard from "@/components/SummaryCard";
import Gallery from "@/components/Gallery";
import ActionBar from "@/components/ActionBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className={styles.page}>
        <main className={styles.main}>
          <ActionBar />
          <SummaryCard />
          <Details />
          <Image
            src="/landscape.jpeg"
            alt="Ocean"
            priority
            width={4032 / 3}
            height={3024 / 3}
          />

          <Gallery />
        </main>
      </div>
    </>
  );
}
