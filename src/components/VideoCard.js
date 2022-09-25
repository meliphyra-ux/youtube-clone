import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"

const VideoCard = ({ title, image, channelTitle, channelId }) => {
  return (
      <Card
      component="section"
        sx={{
          margin: "20px 15px",
          width: "260px",
          height: "250px",
          backgroundColor: "rgba(33, 33, 33, 0.98)",
          color: "#fff",
        }}
      >
        <CardMedia component="img" height="125" image={image} />
        <CardContent>
          <Typography
          component="h2"
          sx={{
          height: "50px"
        }}
           variant="subtitle2">{title}</Typography>
          <Link to={`/channel/${channelId}`}><Typography variant="subtitle1" component="article">{channelTitle}</Typography></Link>
        </CardContent>
      </Card>
  );
};

export default VideoCard;
