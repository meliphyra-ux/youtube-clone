import React, { useState } from "react";
import { AppBar, Button, Box, OutlinedInput } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header = ({ isNavbarOpen, setIsNavbarOpen }) => {
  return (
    <AppBar
      className="flex"
      sx={{
        backgroundColor: "hsl(0, 0%, 18.82%)",
        flexDirection: "row",
        position: "fixed",
      }}
    >
      <Box display="flex" alignItems="center">
        <Button
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen);
          }}
        >
          <MenuIcon
            fontSize="large"
            sx={{
              color: "#ffffff",
            }}
          />
        </Button>
        <h1 className="flex flex-center">
          <YouTubeIcon
            fontSize="large"
            sx={{
              color: "#ff0000",
            }}
          />
          YouTube
        </h1>
      </Box>
      <Box display="flex" alignItems="center">
        <OutlinedInput
          sx={{
            color: "#ffffff",
            borderRadius: "0",
            border: "2px solid hsla(0, 0%, 53.3%, 0.4)",
          }}
          placeholder="Enter a request..."
        />
        <Button><SearchIcon/></Button>
      </Box>
    </AppBar>
  );
};

export default Header;
