import { Box } from "@mui/material";
import React from "react";
import FoodCard from "./FoodCard";
import Loading from "./Loading";

const SearchResult = ({ result, loading }) => {
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {result.map((item) => (
          <FoodCard key={item.key} data={item} />
        ))}
      </Box>
    </>
  );
};

export default SearchResult;
