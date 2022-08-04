import { PlayCircleFilled, Restaurant, Timer } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../hooks/axioshook";

const HeroBanner = () => {
  const key = "resep-sup-tahu-bakso-ikan";

  const navigate = useNavigate();
  const { response, loading, error } = useAxios(`/recipe/${key}`);

  if (loading) {
    return <></>;
  }

  if (error) {
    return (
      <Container
        sx={{
          paddingY: 5,
        }}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      </Container>
    );
  }

  // console.log(response.results);
  const { title, servings, thumb, times, desc, author } = response.results;
  return (
    <>
      <Card
        sx={{
          marginY: 5,
          boxShadow: "none",
          background: "#f3f9d2",
          borderRadius: "66px",
          minHeight: "480px",
          display: "flex",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", padding: 5 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Stack spacing={3}>
              <Typography variant="h3" fontWeight="600">
                {title.replace("Resep", "").split(",")[0]}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {desc.split(".")[0]}. {desc.split(".")[1]}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Chip icon={<Timer />} label={times} />
                <Chip icon={<Restaurant />} label={servings} />
              </Stack>
            </Stack>
          </CardContent>
          <CardActions>
            <Stack
              sx={{ width: "100%", paddingX: 1 }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              rowGap={2}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt={author.user}
                  src="https://i.pravatar.cc/100?img=61"
                  sx={{ width: "56px", height: "56px" }}
                />
                <Stack>
                  <Typography variant="subtitle1" color="text.secondary">
                    {author.user}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {author.datePublished}
                  </Typography>
                </Stack>
              </Stack>
              <Button
                variant="contained"
                sx={{ height: "60px", textTransform: "none", paddingX: 5 }}
                endIcon={<PlayCircleFilled />}
                onClick={() => {
                  navigate(`recipes/${key}`);
                }}
              >
                Lihat Resep
              </Button>
            </Stack>
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "50%" }}
          image={thumb}
          alt={key}
        />
      </Card>
    </>
  );
};

export default HeroBanner;
