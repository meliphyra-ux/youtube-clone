import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Videos from "./Videos";

const Feed = ({ isNavbarOpen }) => {
  const [category, setCategory] = useState("sports");
  return (
    <Box
      component="main"
      display="flex"
      sx={{
        flexDirection: "row",
      }}
    >
      {isNavbarOpen && <Navbar category={category} setCategory={setCategory} />}
      <Videos category={category} />
    </Box>
  );
};

export default Feed;
