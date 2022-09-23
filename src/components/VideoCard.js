import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import React from "react";

const VideoCard = ({ title, image, id, channelTitle }) => {
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
          <Typography variant="subtitle1" component="article">{channelTitle}</Typography>
        </CardContent>
      </Card>
  );
};

export default VideoCard;
