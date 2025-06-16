"use client";
import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Code,
  Collections,
  DarkMode,
  Home,
  LightMode,
  Menu as MenuIcon,
  Search,
} from "@mui/icons-material";
import { useState } from "react";
import { isLocal } from "@/isLocal";
import { useStore } from "@/store";
import DatePicker from "./DatePicker";

export default function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const myTheme = useStore((state) => state.myTheme);
  const searchInput = useStore((state) => state.searchInput);
  const setSearchInput = useStore((state) => state.setSearchInput);
  const setMyTheme = useStore((state) => state.setMyTheme);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="fixed" sx={{ color: "#ffffff", paddingTop: 1 }}>
        <Toolbar>
          <IconButton
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem
              onClick={() => {
                window.location.href = isLocal
                  ? "/home"
                  : "/holiday-react/home";
              }}
            >
              <ListItemIcon>
                <Home fontSize="small" />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                window.location.href = isLocal ? "/dev" : "/holiday-react/dev";
              }}
            >
              <ListItemIcon>
                <Code fontSize="small" />
              </ListItemIcon>
              <ListItemText>Dev</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                window.location.href = isLocal
                  ? "/gallery"
                  : "/holiday-react/gallery";
              }}
            >
              <ListItemIcon>
                <Collections fontSize="small" />
              </ListItemIcon>
              <ListItemText>Gallery</ListItemText>
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Croatia Trip 2025
          </Typography>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="medium"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            sx={{ marginRight: 2, width: 200 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
          />
          <DatePicker />
          <IconButton
            color="inherit"
            onClick={() => {
              if (myTheme === "dark") {
                setMyTheme("light");
              } else if (myTheme === "light") setMyTheme("dark");
            }}
          >
            {myTheme === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
