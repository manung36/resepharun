import { Restaurant, Timer } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ data }) => {
  const navigate = useNavigate();

  const { title, portion, times, key, thumb } = data;
  return (
    <>
      <Card
        sx={{
          maxWidth: "350px",

          boxShadow: "none",
          background:
            "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #f3f9d2 100%)",
          borderRadius: "30px",
          marginBottom: 2,
        }}
      >
        <CardActionArea
          onClick={() => {
            navigate(`/recipes/${key}`);
          }}
          sx={{
            padding: 2,
            borderRadius: "30px",
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "30px",
            }}
            component="img"
            height="225px"
            image={thumb}
            alt="resep-iga-bakar-a-la-makassar"
          />

          <CardContent>
            <Typography gutterBottom variant="h6" fontWeight={600}>
              {title.replace("Resep", "")}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Chip size="small" icon={<Timer />} label={times} />
              <Chip size="small" icon={<Restaurant />} label={portion} />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default FoodCard;
