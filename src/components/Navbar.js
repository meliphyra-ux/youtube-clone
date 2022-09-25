import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { categories } from "../assets/utilities/categories";

const Navbar = ({ categoryName, setCategory }) => {
  return (
    <Box
      component="nav"
      sx={{
        display: "inline-block",
        position: "relative",
        top: "60px",
        left: "0px",
        height: "calc(100vh - 60px)",
        backgroundColor: "hsl(0, 0%, 18.82%)",
        padding: "20px 150px 10px 15px",
        color: "#fff",
      }}
    >
      <Stack spacing={2} direction="column">
        {categories.map((category) => (
          <Button
            key={category.name}
            display="flex"
            sx={{
              justifyContent: "flex-start",
              color: "#fff",
              margin: "15px 0 !important",
              cursor: "pointer",
            }}
            onClick={() => {
              setCategory(category.name.toLowerCase());
            }}
          >
            {category.icon}
            <Typography
              variant="p"
              sx={{
                fontSize: "20px",
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
