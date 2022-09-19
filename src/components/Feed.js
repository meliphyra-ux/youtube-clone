import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Navbar from "./Navbar";
import fetchAPIData from "../assets/utilities/api";

const Feed = ({ isNavbarOpen }) => {
  const [videos, setVideos] = useState(null);
  const [category, setCategory] = useState("sports");

  useEffect(() => {
    fetchAPIData(`search?q=${category}&part=snippet%2Cid&maxResults=50`)
      .then((data) => {
        setVideos(data.items);
        console.log(videos)
      })
      .catch((e) => {
        console.log(e);
      });
  }, [category]);
  return (
    <Box
      display="flex"
      sx={{
        minHeight: "100vh",
      }}
    >
      {isNavbarOpen && <Navbar category={category} setCategory={setCategory} />}
      <Box sx={{
        position: "relative",
        left: "303px",
        top : "60px",
        display: "flex",
        width: "calc(100vw - 303px)",
        zIndex: "0",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "space-around"
      }}>
        {videos && videos != null && videos.map(video => (
            <Card sx={{
                margin: "10px 0",
                width: "300px",
                height: "250px"

              }}
              key={video.id.videoId}
              >
              <CardMedia component="img"
              height="150"
              image={video.snippet.thumbnails.high.url}
              />
              <CardContent>
                <Typography variant="subtitle1">
                  {video.snippet.title.slice(0,60)}
                </Typography>
              </CardContent>
            </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Feed;
