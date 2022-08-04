import { Box, Link, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            minHeight: "100px",
            padding: 5,
            borderRadius: "30px",
            background:
              " linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
            marginY: 5,
          }}
        >
          <Stack spacing={1}>
            <Typography>
              <strong>Resep Makanan Harun Azis | 152235865101-565</strong> adalah React JS Project yang dikembangkan dalam
              rangka memenuhi tugas akhir Pelatihan React JS Kelas B
              DTS Kominfo yaitu{" "}
              <Link href="https://digitalent.kominfo.go.id/">Digitalent Kominfo 2022</Link>.
              
            </Typography>
            <Typography>
              Akun Github saya:{" "}
              <Link href="https://github.com/manung36">Harun Azis @manung36</Link>
            </Typography>
            <Typography>
              <strong>Ucapan Terima Kasih saya sampaikan sebesar-besarnya kepada: </strong>
            </Typography>
            <Typography>
              Mentor paling gokil React JS kelas B DTS Kominfo:{" "}
              <Link href="https://github.com/depimomo">Monica Devi</Link>
            </Typography>
            <Typography>
              API Resep Makanan:{" "}
              <Link href="https://github.com/tomorisakura/unofficial-masakapahariini-api">
                @tomorisakura
              </Link>
            </Typography>
            <Typography>
              UI Design Provider:{" "}
              <Link href="https://www.flowbase.co/">flowbase.co</Link>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default About;
