"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Slider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { LocalAirport, Menu } from "@mui/icons-material";

const itemData = [
  {
    img: "water.jpeg",
    title: "Rocky beach",
    author: "@tristan_heusser",
  },
  {
    img: "burger.jpeg",
    title: "Burger",
    author: "@tristan_heusser",
  },
  {
    img: "pizza.jpeg",
    title: "Pizza",
    author: "@tristan_heusser",
  },
  {
    img: "icecream.jpeg",
    title: "Icecream",
    author: "@tristan_heusser",
  },
  {
    img: "friends.jpeg",
    title: "Friends",
    author: "@tristan_heusser",
  },
  {
    img: "dinner.jpeg",
    title: "Dinner",
    author: "@tristan_heusser",
  },
  {
    img: "evening.jpeg",
    title: "Evening",
    author: "@tristan_heusser",
  },
  {
    img: "basketball.jpeg",
    title: "Basketball",
    author: "@tristan_heusser",
  },
];
export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className={styles.page}>
        <main className={styles.main}>
          <Button variant="outlined" startIcon={<LocalAirport />}>
            Croatia Trip 2025
          </Button>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="night.jpeg"
              title="Croatia"
            />
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                alignItems={"center"}
                sx={{ width: "100%", marginTop: 2, marginBottom: 2 }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/avatar.jpeg"
                  sx={{ width: 60, height: 60 }}
                />
                <Typography gutterBottom variant="h5" component="div">
                  Croatia at Night
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                voluptatibus molestiae nobis quam accusamus rerum tenetur est
                repellat nemo autem.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Image
            src="/landscape.jpeg"
            alt="Ocean"
            priority
            width={4032 / 3}
            height={3024 / 3}
          />

          <ImageList sx={{ width: "100%", height: 900 }}>
            {itemData.map((item) => (
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
        </main>
      </div>
    </>
  );
}
