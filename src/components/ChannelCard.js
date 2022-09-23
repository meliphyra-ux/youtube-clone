import { Avatar, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const ChannelCard = ({channelDetail}) => {
  return (
    <Card component="section" sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "20px 15px",
        width: "260px",
        height: "250px",
        backgroundColor: "rgba(33, 33, 33, 0.98)",
        color: "#fff",
      }}>
        <Avatar src={channelDetail.snippet.thumbnails.high.url} sx={{
            height: "150px",
            width: "150px"
        }}/>
        <CardContent component="article">
            <Typography variant="subtitle1" component="h2">{channelDetail.snippet.title}</Typography>
        </CardContent>
    </Card>
  )
}

export default ChannelCard