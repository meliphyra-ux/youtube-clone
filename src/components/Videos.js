import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import fetchAPIData from "../assets/utilities/api";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { Link } from "react-router-dom";

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
    <Box
      sx={{
        height: "100vh",
        overflow: "scroll",
        width: "100%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          position: "relative",
          top: "60px",
          margin: "10px 15px",
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
          width: "100%",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {videos &&
          videos.map((video) => (
            <>
              {video.id.kind === "youtube#video" ? (
                <Link to={`/video/${video.id.videoId}`}>
                  <VideoCard
                    key={video.id.videoId}
                    channelId={video.snippet.channelId}
                    title={video.snippet.title.slice(0, 55)}
                    channelTitle={video.snippet.channelTitle}
                    image={
                      video.snippet.thumbnails.high?.url ||
                      video.snippet.thumbnails.default.url
                    }
                  />
                </Link>
              ) : (
                <Link to={`/channel/${video.id.channelId}`}>
                  <ChannelCard channelDetail={video} />
                </Link>
              )}
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Videos;
