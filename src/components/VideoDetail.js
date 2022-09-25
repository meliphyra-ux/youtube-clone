import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom'
import { Box, Typography } from "@mui/material"
import fetchAPIData from '../assets/utilities/api'
import { Link } from 'react-router-dom'
import VideoCard from './VideoCard'

const VideoDetail = () => {
  let { id } = useParams()
  const [videoData, setVideoData] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null)
  useEffect(() => {
    fetchAPIData(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`)
    .then(data => {
      setVideoData(data.items[0])
    })

    fetchAPIData(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=49`)
    .then(data => {
      setRelatedVideos(data.items)
      console.log(data.items)
    })
  }, [id])
  
  return (
  <Box
  component="main"
  sx={{
    backgroundColor: 'rgba(33, 33, 33, 0.98)',
    width: "100vw",
    padding: "0 20px",
    minHeight: "calc(100vh)",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    top: "60px",
  }}>
    <Box
    component="section"
    sx={{
      minHeight: "calc(100vh - 120px)",
      margin: "30px",
      color: "#fff",
      width: "70vw",
    }}>
      <ReactPlayer className="player" height="500px" width="75vw" url={`https://www.youtube.com/watch?v=${id}`}/>
      {videoData !== null && <>
      <Typography variant="h3">{videoData.snippet.title}</Typography>
      <Link to={`/channel/${videoData.snippet.channelId}`}><Typography variant="subtitle1" >{videoData.snippet.channelTitle}</Typography></Link>
      <Typography variant="subtitle2" >{videoData.snippet.description}</Typography>
      </>}
    </Box>
    <Box component="section">
        {relatedVideos && relatedVideos.map(relatedVideo =>
        <Link to={`/video/${relatedVideo.id.videoId}`}>
          <VideoCard
              key={relatedVideo.id.videoId}
              channelId={relatedVideo.snippet.channelId}
              title={relatedVideo.snippet.title.slice(0, 55)}
              channelTitle={relatedVideo.snippet.channelTitle}
              image={relatedVideo.snippet.thumbnails.high.url}
            />
          </Link>)}
    </Box>
  </Box>
  )
}

export default VideoDetail