"use client";
import { Button, Stack } from "@mui/material";
import { Clear } from "@mui/icons-material";
import { useRef } from "react";
import { useStore } from "@/store";
import {
  DatePicker as MuiDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DatePicker() {
  const setDate = useStore((state) => state.setDate);
  const dateRef = useRef(null);
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{
        padding: 0,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDatePicker        
          sx={{
            '& .MuiPickersInputBase-root, & .MuiIconButton-root, & label': {
              color: 'white !important',
            }
          }}
          inputRef={dateRef}
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
