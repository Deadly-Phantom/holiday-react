"use client";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { imageData } from "./imageData";
import { useStore } from "@/store";
import { MouseEvent, useState } from "react";
import { ViewList, ViewModule } from "@mui/icons-material";

export default function Gallery() {
  const userInput = useStore((state) => state.userInput);
  const date = useStore((state) => state.date);
  const [viewMode, setViewMode] = useState<string | null>("left");

  const handleViewMode = (
    _event: MouseEvent<HTMLElement>,
    newViewMode: string | null
  ) => {
    setViewMode(newViewMode);
  };

  const role = userInput === "tristan" ? "god" : "mortal";
  if (role === "mortal") {
    console.log("noob");
  } else {
    console.log("god");
  }

  return (
    <Box sx={{ paddingTop: 6 }}>
      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={handleViewMode}
        aria-label="text viewMode"
      >
        <ToggleButton value="list" aria-label="list">
          <ViewList />
        </ToggleButton>
        <ToggleButton value="grid" aria-label="grid">
          <ViewModule />
        </ToggleButton>
      </ToggleButtonGroup>

      {viewMode === "grid" && (
        <ImageList
          sx={{
            width: "100%",
            height: 900,
            padding: 6,
            paddingLeft: 1,
            paddingRight: 1,
          }}
        >
          {imageData
            .filter((i) => (role === "mortal" ? i.role === role : true))
            .filter((i) =>
              i.date && date && date != "" ? i.date === date : true
            )
            .map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  style={{ height: "200px" }}
                  loading="lazy"
                  onClick={() => {
                    console.log("ToDo: Fullscreen");
                  }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={
                    <>
                      <Typography
                        variant="body2"
                        sx={{ marginBottom: 0.5, marginTop: 1 }}
                      >
                        {item.description}
                      </Typography>
                      <span>
                        By: {item.author} at {item.date}
                      </span>
                    </>
                  }
                  position="below"
                />
              </ImageListItem>
            ))}
        </ImageList>
      )}
      {viewMode === "list" && "BOOM"}
    </Box>
  );
}
