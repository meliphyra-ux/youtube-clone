import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { categories } from '../assets/utilities/categories'

const Navbar = () => {
  return (
    <Box sx={{
      position: "fixed",
      top: "60px",
      left: "0px",
      height: "100vh",
      backgroundColor: "hsl(0, 0%, 18.82%)",
      padding: "20px 150px 10px 15px",
      color: "#fff"
    }}>
      <Stack spacing={2} direction="column">
          {categories.map(category =>(
            <Box display="flex" alignItems="center" sx={{
              margin: "15px 0 !important"
            }}>
              {category.icon}
              <Typography variant="p" sx={{
                fontSize: "20px",
                paddingLeft: "15px"
              }}>
                {category.name}
              </Typography>
            </Box>
          ))}
      </Stack>
    </Box>
  )
}

export default Navbar