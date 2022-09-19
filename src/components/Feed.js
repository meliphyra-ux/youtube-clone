import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Videos from "./Videos";

const Feed = ({ isNavbarOpen }) => {
  const [category, setCategory] = useState("sports");
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      {isNavbarOpen && <Navbar category={category} setCategory={setCategory} />}
      <Videos category={category}/>
    </Box>
  );
};

export default Feed;
