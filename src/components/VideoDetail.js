import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom'
import { Box, Typography } from "@mui/material"
import fetchAPIData from '../assets/utilities/api'

const VideoDetail = () => {
  let { id } = useParams()
  const [videoData, setVideoData] = useState(null)
  useEffect(() => {
    fetchAPIData(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`)
    .then(data => {
      setVideoData(data.items[0])
    })
  }, [id])
  
  return (
  <Box sx={{
    backgroundColor: 'rgba(33, 33, 33, 0.98)',
    width: "100vw",
    minHeight: "calc(100vh + 75px)"
  }}>
    <Box sx={{
      position: "relative",
      top: "60px",
      minHeight: "calc(100vh - 120px)",
      margin: "30px",
      color: "#fff",
      width: "65vw",
    }}>
      <ReactPlayer className="player" height="500px" width="825px" url={`https://www.youtube.com/watch?v=${id}`}/>
      {videoData !== null && <>
      <Typography variant="h3">{videoData.snippet.title}</Typography>
      <Typography variant="subtitle1" >{videoData.snippet.channelTitle}</Typography>
      <Typography variant="subtitle2" >{videoData.snippet.description}</Typography>
      </>}
    </Box>
  </Box>
  )
}

export default VideoDetail