import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Navbar from "./Navbar";
import fetchAPIData from "../assets/utilities/api";

const Feed = ({ isNavbarOpen }) => {
  const [videos, setVideos] = useState(null);
  const [category, setCategory] = useState("sports");

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
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {isNavbarOpen && <Navbar category={category} setCategory={setCategory} />}
      <Typography variant="h2" 
      sx={{
        position: "relative",
        top: "60px",
        left: "375px",
        color: "#fff",
        fontWeight: "bold"
      }}
      >{category[0].toUpperCase() + category.slice(1,60)}</Typography>
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
                margin: "20px 15px",
                width: "250px",
                height: "200px"

              }}
              key={video.id.videoId}
              >
              <CardMedia component="img"
              height="125"
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
