import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Grid,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import { Container } from "@mui/system";
  import React, { useState } from "react";
  import recipesInstance from "../apis/recipesInstance";
  import SearchResult from "../components/SearchResult";
  
  const Search = () => {
    const [qwery, setQwery] = useState("");
    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(false);
  
    const fetchData = async (params) => {
      setError("");
      setloading(true);
      try {
        const result = await recipesInstance.get(params);
        setResponse(result.data.results);
        setloading(false);
        if (result.data.results.length == 0) {
          setError({
            message: "Sayang sekali, data yang anda cari tidak ditemukan.",
          });
        }
      } catch (error) {
        setError(error);
        setloading(false);
      }
    };
  
    const handleSubmit = () => {
      if (qwery === "") {
        setError({ message: "Isi kata kunci terlebih dahulu!." });
      } else {
        fetchData(`/search/?q=${qwery}`);
      }
    };
  
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
            <Stack spacing={2}>
              <Typography variant="h3" fontWeight={600}>
                Cari Resep
              </Typography>
              <Typography variant="body">
                Masukkan kata kunci masakan untuk mencari resep yang anda
                inginkan.
              </Typography>
              <Stack spacing={2} direction="row">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      value={qwery}
                      onChange={(event) => {
                        setQwery(event.target.value);
                      }}
                      size="small"
                      sx={{
                        width: "100%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Button
                      onClick={handleSubmit}
                      sx={{
                        height: "100%",
                        textTransform: "none",
                      }}
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </Box>
          {error && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error.message}
            </Alert>
          )}
          <SearchResult result={response} loading={loading} />
        </Container>
      </>
    );
  };
  
  export default Search;
  