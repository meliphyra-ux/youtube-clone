import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { categories } from "../assets/utilities/categories";

const Navbar = ({ categoryName, setCategory }) => {
  return (
    <Box
      component="nav"
      sx={{
        position: "relative",
        top: "60px",
        height: "calc(100vh - 60px)",
        backgroundColor: "hsl(0, 0%, 18.82%)",
        padding: "20px 100px 10px 8px",
      }}
    >
      <Stack spacing={2} direction="column">
        {categories.map((category) => (
          <Button
            key={category.name}
            display="flex"
            sx={{
              justifyContent: "flex-start",
              margin: "15px 0 !important",
              cursor: "pointer",
            }}
            onClick={() => {
              setCategory(category.name.toLowerCase());
            }}
          >
            {category.icon}
            <Typography
              variant="h6"
              sx={{
                paddingLeft: "15px",
                backgroundColor:
                  category.name === categoryName ? "green" : false,
              }}
            >
              {category.name}
            </Typography>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Navbar;
