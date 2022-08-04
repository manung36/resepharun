import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ListForDetailRecipe = ({ data }) => {
  return (
    <>
      <Stack spacing={2}>
        {data.map((item, index) => (
          <Box key={index}>
            <Typography
              variant="body"
              fontWeight={400}
              fontSize="16px"
              lineHeight="28px"
            >
              {item}
            </Typography>
            <Divider />
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default ListForDetailRecipe;
