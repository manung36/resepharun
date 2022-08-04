import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Info = ({ icon, title, content }) => {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        {icon}
        <Box>
          <Typography fontWeight="700">{title}</Typography>
          <Typography fontWeight="500">{content}</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Info;
