import {
    Box,
    Button,
    CircularProgress,
    Stack,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useAuthState } from "react-firebase-hooks/auth";
  import { useNavigate } from "react-router-dom";
  import { auth } from "../config/firebase";
  
  const RouteGuard = ({ children }) => {
    const navigate = useNavigate();
    const [user, isLoading] = useAuthState(auth);
  
    if (isLoading) {
      return (
        <Box
          sx={{
            backgroundColor: "black",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      );
    }
  
    if (user) {
      return children;
    }
  
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4">You've Been Logged Out</Typography>
          <Typography variant="body">Please log back in</Typography>
  
          <Button
            size="large"
            onClick={() => {
              navigate("/login");
            }}
            color="secondary"
            variant="contained"
            sx={{
              boxShadow: "none",
              textTransform: "none",
            }}
          >
            Okay
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default RouteGuard;
  