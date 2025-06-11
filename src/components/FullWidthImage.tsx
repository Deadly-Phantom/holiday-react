"use client";
import { Box } from "@mui/material";

export default function FullWidthImage() {
  return (
    <Box
      sx={{
        height: "60vh",
        width: "100%",
        backgroundImage: "url('landscape.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    />
  );
}
