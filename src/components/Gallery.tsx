"use client";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { imageData } from "./imageData";

export default function Gallery({ role = "mortal" }) {
  if (role === "mortal") {
    console.log("noob");
  } else {
    console.log("god");
  }

  return (
    <ImageList sx={{ width: "100%", height: 900 }}>
      {imageData
        .filter((i) => (role === "mortal" ? i.role === role : true))
        .map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
}
