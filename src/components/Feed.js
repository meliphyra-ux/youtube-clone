import React from 'react'
import { Box } from '@mui/material'
import Navbar from './Navbar'

const Feed = ({isNavbarOpen}) => {
  return (
    <Box display="flex" sx={{
      height: "100vh"
    }}>
      {isNavbarOpen && <Navbar />}
    </Box>
  )
}

export default Feed