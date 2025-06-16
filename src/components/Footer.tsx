"use client";

import { useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "40px",
        backgroundColor: theme.palette.mode === "dark" ? "#202020" : "#f1f1f1",
        textAlign: "center",
        lineHeight: "50px",
        fontSize: "14px",
        color: "#999999",
      }}
    >
      HACKED BY TRISTAN
    </div>
  );
}
