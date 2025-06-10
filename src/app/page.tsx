"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, TextField } from "@mui/material";
import { LocalAirport } from "@mui/icons-material";
import TopBar from "@/components/TopBar";
import Details from "@/components/Details";
import SummaryCard from "@/components/SummaryCard";
import Gallery from "@/components/Gallery";
import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <TopBar />
      <div className={styles.page}>
        <main className={styles.main}>
          <TextField id="standard-basic" label="Standard" variant="standard" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
          <Button variant="outlined" startIcon={<LocalAirport />}>
            Croatia Trip 2025
          </Button>
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
