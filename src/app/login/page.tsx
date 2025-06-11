"use client";

import { Login } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <>
      <Paper elevation={5} sx={{ padding: 2, margin: "0 auto", maxWidth: 290 }}>
        <Stack spacing={1}>
          <Typography
            fontFamily={"lobster"}
            fontWeight={700}
            variant="h5"
            sx={{ margin: "0 auto", textAlign: "center" }}
          >
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
          <Divider sx={{ paddingBottom: 2 }} />
          <Button variant="contained" startIcon={<Login />}>
            Login
          </Button>
        </Stack>
      </Paper>
    </>
  );
}
