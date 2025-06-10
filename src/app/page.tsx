"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Avatar, Box, ImageList, ImageListItem, ImageListItemBar, Slider, Stack } from "@mui/material";

const itemData = [
  {
    img: 'water.jpeg',
    title: 'Rocky beach',
    author: '@tristan_heusser',
  },
  {
    img: 'burger.jpeg',
    title: 'Burger',
    author: '@tristan_heusser',
  },
  {
    img: 'pizza.jpeg',
    title: 'Pizza',
    author: '@tristan_heusser',
  },
  {
    img: 'icecream.jpeg',
    title: 'Icecream',
    author: '@tristan_heusser',
  },
  {
    img: 'friends.jpeg',
    title: 'Friends',
    author: '@tristan_heusser',
  },
  {
    img: 'dinner.jpeg',
    title: 'Dinner',
    author: '@tristan_heusser',
  },
  {
    img: 'evening.jpeg',
    title: 'Evening',
    author: '@tristan_heusser',
  },
  {
    img: 'basketball.jpeg',
    title: 'Basketball',
    author: '@tristan_heusser',
  },
];
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/landscape.jpeg"
          alt="Ocean"
          priority
          width={4032/3}
          height={3024/3}
        />
        
  <Avatar alt="Remy Sharp" src="/avatar.jpeg" />
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
  );
}
