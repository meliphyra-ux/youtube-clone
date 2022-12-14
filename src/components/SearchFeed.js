import React from "react";
import { Box } from "@mui/material";

import { useParams } from "react-router-dom";
import Videos from "./Videos";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  return (
    <Box>
      <Videos category={searchTerm} />
    </Box>
  );
};

export default SearchFeed;
