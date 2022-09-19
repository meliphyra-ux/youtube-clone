import React, { useState, useEffect } from 'react'
import { Avatar, Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import fetchAPIData from "../assets/utilities/api";

const Videos = ({category}) => {
    
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
    <Typography variant="h2" 
      sx={{
        position: "relative",
        top: "60px",
        margin: "10px 15px",
        color: "#fff",
        fontWeight: "bold"
      }}
      >{category[0].toUpperCase() + category.slice(1,60)}</Typography>
      <Box sx={{
        position: "relative",
        top : "60px",
        display: "inline-flex",
        width: "calc(100vw - 303px)",
        zIndex: "0",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "space-around"
      }}>
        {videos && videos != null && videos.map(video => (
            <Card sx={{
                margin: "20px 15px",
                width: "260px",
                height: "250px",
                backgroundColor: 'rgba(33, 33, 33, 0.98)',
                color: "#fff"
              }}
              key={video.id.videoId}
              >
              <CardMedia component="img"
              height="125"
              image={video.snippet.thumbnails.high.url}
              />
              {/* <Avatar alt={}></Avatar> */}
              <CardContent>
                <Typography variant="subtitle2">
                  {video.snippet.title.slice(0,60)}
                </Typography>
              </CardContent>
            </Card>
        ))}
      </Box>
    
    </Box>
  )
}

export default Videos