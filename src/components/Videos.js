import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import fetchAPIData from "../assets/utilities/api";
import VideoCard from "./VideoCard";

const Videos = ({ category }) => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    fetchAPIData(`search?q=${category}&part=snippet%2Cid&maxResults=48`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [category]);
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          position: "relative",
          top: "60px",
          margin: "10px 15px",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {category[0].toUpperCase() + category.slice(1, 60)}
      </Typography>
      <Box
        sx={{
          position: "relative",
          top: "60px",
          display: "inline-flex",
          width: "calc(100vw - 303px)",
          zIndex: "0",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {videos &&
          videos != null &&
          videos.map((video) => (
            <VideoCard
              key={video.id.videoId}
              id={video.id.videoId}
              title={video.snippet.title.slice(0, 60)}
              image={video.snippet.thumbnails.high.url}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Videos;
