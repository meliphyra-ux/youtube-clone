import React, { useState } from "react";
import { AppBar, Button, Box, OutlinedInput } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Navbar from "./Navbar";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  return (
    <AppBar
      className="flex"
      sx={{
        backgroundColor: "hsl(0, 0%, 18.82%)",
        flexDirection: "row"
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
            <OutlinedInput sx={{
                color: "#ffffff",
                border: "2px solid hsla(0, 0%, 53.3%, 0.4)"
            }} placeholder="Enter a request..."/>
      </Box>
      {isNavbarOpen && <Navbar />}
    </AppBar>
  );
};

export default Header;
