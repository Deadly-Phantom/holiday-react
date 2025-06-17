"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { imageData } from "./imageData";
import { useStore } from "@/store";

export default function GalleryCard() {
  const userInput = useStore((state) => state.userInput);
  const searchInput = useStore((state) => state.searchInput);
  const date = useStore((state) => state.date);

  const role = userInput === "tristan" ? "god" : "mortal";
  if (role === "mortal") {
    console.log("noob");
  } else {
    console.log("god");
  }

  return (
    <Grid container spacing={2} p={6}>
      {imageData
        .filter((i) => (role === "mortal" ? i.role === role : true))
        .filter((i) =>
          i.description.includes(searchInput) ||
          i.title.includes(searchInput) ||
          i.date.includes(searchInput)
            ? true
            : false
        )
        .filter((i) => (i.date && date && date != "" ? i.date === date : true))
        .map((item, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.img}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{item.date}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
