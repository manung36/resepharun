import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <>
      <Container
        sx={{
          paddingY: 2,
          marginTop: 10,
        }}
      >
        <Stack spacing={2}>
          <Stack spacing={2} direction="row" alignItems="center">
            {" "}
            <SoupKitchenOutlinedIcon />
            <Typography variant="h6">Resep Makanan Harun Azis</Typography>
          </Stack>

          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="body2">
              {" "}
              © 2022 By Harun Azis | 152235865101-565
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
