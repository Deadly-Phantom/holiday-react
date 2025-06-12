"use client";
import { green } from "@mui/material/colors";
import { Login } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/store";
import { isLocal } from "@/isLocal";
// to do: simulate login function
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const userInput = useStore((state) => state.userInput);
  const setUserInput = useStore((state) => state.setUserInput);
  const userPassword = useStore((state) => state.userPassword);
  const setUserPassword = useStore((state) => state.setUserPassword);

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      setTimeout(() => {
        console.log("Checking credentials...");
        if (userInput === "tristan" && userPassword === "1") {
          setSuccess(true);
          setLoading(false);
          window.location.href = isLocal ? "/home" : "/holiday-react/home";
        } else {
          setSuccess(false);
          setLoading(false);
          alert("Invalid credentials. Please try again.");
          setUserInput("");
        }
      }, 1000);
      timer.current = setTimeout(() => {}, 1100);
    }
  };
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
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleButtonClick();
              }
            }}
          />
          <Divider sx={{ paddingBottom: 2 }} />
          <Button
            variant="contained"
            startIcon={
              loading ? (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                  }}
                />
              ) : (
                <Login />
              )
            }
            sx={buttonSx}
            disabled={loading}
            onClick={handleButtonClick}
          >
            Login
          </Button>
        </Stack>
      </Paper>
    </>
  );
}
