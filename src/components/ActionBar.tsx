"use client";
import { Button, Stack, TextField } from "@mui/material";
import { Clear, LocalAirport } from "@mui/icons-material";
import { useRef } from "react";
import { useStore } from "@/store";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ActionBar() {
  const age = useStore((state) => state.age);
  const setAge = useStore((state) => state.setAge);
  const userInput = useStore((state) => state.userInput);
  const setUserInput = useStore((state) => state.setUserInput);
  const setDate = useStore((state) => state.setDate);
  const dateRef = useRef(null);

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
          inputRef={dateRef}
          label="Select a Date"
          // value={date}
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
      <Button
        color="error"
        variant="contained"
        onClick={() => {
          setDate("");
          // console.log((dateRef.current as any).value); // Clear the date in
          // (dateRef.current as any).value = ""; // Clear the date input field
        }}
      >
        <Clear />
      </Button>
    </Stack>
  );
}
