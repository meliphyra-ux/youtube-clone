import React, { useState, useEffect } from "react";
import fetchAPIData from "../assets/utilities/api";
import { Box, Typography } from "@mui/material";

import { Avatar } from "@mui/material";

import { useParams, Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);

  useEffect(() => {
    fetchAPIData(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) => {
      setChannelDetails(data.items[0]);
    });
    fetchAPIData(
      `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((data) => {
      setChannelVideos(data.items);
    });
  }, [id]);

  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        top: "60px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {channelDetails && (
        <>
          <Avatar
            src={
              channelDetails.snippet.thumbnails.high?.url ||
              channelDetails.snippet.thumbnails.default.url
            }
            sx={{ width: "125px", height: "125px" }}
          />
          <Typography
            sx={{
              margin: "20px",
            }}
            variant="h3"
          >
            {channelDetails.snippet.title}
          </Typography>
        </>
      )}
      <Typography variant="h4">Channels Videos</Typography>
      <Box sx={{
        display: "flex",
        flexFlow: "row wrap"
      }}>
        {channelVideos &&
          channelVideos.map((video) => (
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
          ))}
      </Box>
    </Box>
  );
};

export default ChannelDetail;
