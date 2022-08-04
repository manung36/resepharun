import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Profile = () => {
  return (
    <>
      <Container
        sx={{
          paddingY: 5,
        }}
      >
        <Typography variant="h3">Profil Akun:</Typography>
        <Typography variant="body">
          Nama: Harun Azis <br></br>
          Kelas: B, React JS DTS Kominfo <br></br>
          No Registrasi: 152235865101-565
        </Typography>
      </Container>
    </>
  );
};

export default Profile;
