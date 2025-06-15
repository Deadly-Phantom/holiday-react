"use client";
import { Button, Stack, TextField } from "@mui/material";
import { LocalAirport } from "@mui/icons-material";
import { useStore } from "@/store";
import DatePicker from "./DatePicker";

export default function ActionBar() {
  const age = useStore((state) => state.age);
  const setAge = useStore((state) => state.setAge);
  const userInput = useStore((state) => state.userInput);
  const setUserInput = useStore((state) => state.setUserInput);

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
      <DatePicker />
    </Stack>
  );
}
