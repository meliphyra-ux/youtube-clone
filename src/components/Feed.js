import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import fetchAPIData from "../assets/utilities/api";

const Feed = ({ isNavbarOpen }) => {
  const [videos, setVideos] = useState(null);
  const [category, setCategory] = useState("sports");

  useEffect(() => {
    fetchAPIData(`search?q=${category}&part=snippet%2Cid&maxResults=50`)
      .then((items) => {
        setVideos(items);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [category]);
  return (
    <Box
      display="flex"
      sx={{
        height: "100vh",
      }}
    >
      {isNavbarOpen && <Navbar category={category} setCategory={setCategory} />}
    </Box>
  );
};

export default Feed;
