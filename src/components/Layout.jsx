import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        {children}
        <Box
          sx={{
            flex: "1",
          }}
        />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
