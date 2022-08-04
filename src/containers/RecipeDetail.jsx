import { useParams } from "react-router-dom";

import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Loading from "../components/Loading";
import { useAxios } from "../hooks/axioshook";
import Info from "../components/Info";
import { Print, PrintOutlined, Restaurant, Timer } from "@mui/icons-material";
import ListForDetailRecipe from "../components/ListForDetailRecipe";
import OtherRecipes from "../components/OtherRecipes";

const RecipeDetail = () => {
  let { recipeId } = useParams();

  const { response, loading, error } = useAxios(`/recipe/${recipeId}`);

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

  const { author, desc, ingredient, servings, step, thumb, times, title } =
    response.results;
  return (
    <Container
      sx={{
        marginTop: 5,
      }}
    >
      <Stack spacing={5}>
        {/* Judul Resep */}
        <Stack direction="row" justifyContent="space-between">
          <Box
            sx={{
              maxWidth: "840px",
            }}
          >
            <Typography variant="h3" fontWeight={600}>
              {title}
            </Typography>
          </Box>
          <Box>
            <IconButton
              sx={{
                height: "66px",
                width: "66px",
                background: "#ff88dc",
              }}
            >
              <PrintOutlined />
            </IconButton>
            <Typography
              sx={{ marginTop: 1 }}
              variant="body2"
              textAlign="center"
              fontWeight={500}
              fontSize="14px"
            >
              Cetak
            </Typography>
          </Box>
        </Stack>
        {/* Sekilas Info */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={4}
        >
          <Info
            icon={<Avatar alt={author.user} src="https://i.pravatar.cc/100" />}
            title={author.user}
            content={author.datePublished}
          />

          <Info icon={<Timer />} title="Cook Time" content={times} />
          <Info icon={<Restaurant />} title="Portion" content={servings} />
        </Stack>

        <Card
          sx={{
            // maxWidth: "840px",
            boxShadow: "none",
            borderRadius: "30px",
            // maxHeight: "500px",
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "30px",
            }}
            component="img"
            image={thumb}
            alt={title}
          />
        </Card>

        <Box>
          <Typography
            variant="body"
            fontWeight={400}
            fontSize="16px"
            lineHeight="28px"
          >
            {desc}
          </Typography>
        </Box>

        {/* Bahan  */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            sx={{
              marginBottom: 5,
            }}
          >
            <Box
              sx={{
                paddingRight: 5,
              }}
            >
              <Box>
                <Typography
                  fontWeight={600}
                  variant="h4"
                  sx={{
                    marginBottom: 2,
                  }}
                >
                  Bahan-bahan:
                </Typography>
                <ListForDetailRecipe data={ingredient} />
              </Box>

              {/* Langkah */}
              <Box
                sx={{
                  marginTop: 5,
                }}
              >
                <Typography
                  fontWeight={600}
                  variant="h4"
                  sx={{
                    marginBottom: 2,
                  }}
                >
                  Cara Masak:
                </Typography>
                <ListForDetailRecipe data={step} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography
              fontWeight={600}
              variant="h4"
              sx={{
                marginBottom: 3,
              }}
            >
              Resep Lainnya:
            </Typography>
            <OtherRecipes />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default RecipeDetail;
