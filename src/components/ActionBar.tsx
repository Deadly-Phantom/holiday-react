"use client";
import { Button, Stack, TextField } from "@mui/material";
import { LocalAirport } from "@mui/icons-material";
import { useState } from "react";
import { useStore } from "@/store";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ActionBar() {
  const [age, setAge] = useState(5);
  const userInput = useStore((state) => state.userInput);
  const setUserInput = useStore((state) => state.setUserInput);
  const setDate = useStore((state) => state.setDate);

  return (
    <Stack direction={"row"} spacing={2} sx={{ padding: 2 }}>
      <Button
        onClick={() => {
          setUserInput("yeon");
          setAge(39);
        }}
        variant="contained"
      >
        Y
      </Button>
      <Button
        onClick={() => {
          setUserInput("tristan");
          setAge(17);
        }}
        variant="contained"
        sx={{ marginRight: 2 }}
      >
        T
      </Button>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <TextField
        type="number"
        id="standard-basic"
        label="Age"
        variant="standard"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <Button
        variant="contained"
        startIcon={<LocalAirport />}
        color={
          age === 17 ? "warning" : userInput === "tristan" ? "success" : "error"
        }
      >
        Croatia Trip 2025
      </Button>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select a Date"
          onChange={(e) => {
            if (e) {
              setDate(
                e.year() +
                  "-" +
                  String(e.month() + 1).padStart(2, "0") +
                  "-" +
                  String(e.date()).padStart(2, "0")
              );
            }
          }}
        />
      </LocalizationProvider>
    </Stack>
  );
}
