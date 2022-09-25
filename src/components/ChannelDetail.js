import React, { useState, useEffect } from 'react'
import fetchAPIData from '../assets/utilities/api'
import { Box } from '@mui/material'

import { useParams } from 'react-router-dom'

const ChannelDetail = () => {

  const { id } = useParams()
  const [channelDetails, setChannelDetails] = useState(null)
  const [ channelVideos, setChannelVideos ] = useState(null)

  useEffect(()=>{
    fetchAPIData(`channels?part=snippet%2Cstatistics&id=${id}`)
    .then(data => {
      setChannelDetails(data.items[0])
    })
    fetchAPIData(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`)
    .then(data =>{
      setChannelVideos(data.items)
    })
  }, [id])

  return (
    <Box component="main" sx={{
      position: "relative",
      top: "60px",
      height: "100vh",
      width: "100vw",
      backgroundColor: 'rgba(33, 33, 33, 0.98)'
    }}>
      
    </Box>
  )
}

export default ChannelDetail