"use client";

import { Avatar, Paper, Stack, TextField, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Paper elevation={5} sx={{ padding: 2, margin: "0 auto", maxWidth: 290 }}>
        <Stack>
          <Typography variant="h5" sx={{ margin: "0 auto" }}>
            Croatia Trip 2025
          </Typography>
          <Avatar
            alt="Tristan"
            src="avatar.jpeg"
            sx={{ width: 250, height: 250, margin: "2rem auto", marginTop: 1 }}
          />
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </Stack>
      </Paper>
    </>
  );
}
