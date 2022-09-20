import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const VideoCard = ({ title, image, id }) => {
  return (
    <Link to={`/video/${id}`}>
      <Card
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
          <Typography variant="subtitle2">{title}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
