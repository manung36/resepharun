import { Container } from "@mui/material";
import React from "react";
import FoodList from "../components/FoodList";
import HeroBanner from "../components/HeroBanner";

const HomePage = () => {
  return (
    <>
      <Container>
        <HeroBanner />
        <FoodList />
      </Container>
    </>
  );
};

export default HomePage;
