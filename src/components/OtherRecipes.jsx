import { Restaurant } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import React from "react";
import { useAxios } from "../hooks/axioshook";
import Loading from "./Loading";

const OtherRecipes = () => {
  const { response, loading, error } = useAxios(`/recipes-length/?limit=5`);
  const navigate = useNavigate();

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      </>
    );
  }

  return (
    <>
      <Stack spacing={3}>
        {response.results.map((result) => (
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            key={result.key}
          >
            <Card
              sx={{
                maxWidth: "180px",
                borderRadius: "20px",
                boxShadow: "none",
              }}
            >
              <CardActionArea
                onClick={() => {
                  navigate(`../recipes/${result.key}`, { replace: true });
                }}
              >
                <CardMedia
                  sx={{
                    borderRadius: "20px",
                  }}
                  component="img"
                  image={result.thumb}
                  alt={result.key}
                />
              </CardActionArea>
            </Card>
            <Stack spacing={2}>
              <Typography fontWeight={600}>
                {result.title.replace("Resep", "").substring(0, 35)}...
              </Typography>
              <Stack direction="row" spacing={2}>
                <Chip
                  size="small"
                  icon={<Restaurant />}
                  label={result.portion}
                />
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default OtherRecipes;
