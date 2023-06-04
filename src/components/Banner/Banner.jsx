import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import banner0 from "../../assets/images/banner0.jpg";
import banner1 from "../../assets/images/banner1.jpg";

import { useMainContext } from "../../context/MainContext";
import { useMainThemeContext } from "../../context/MainThemeContext";

const Banner = () => {
  const { sectionsRes } = useMainContext();
  const { mode } = useMainThemeContext();

  const titlesStyle = {
    fontSize: { md: 48, lg: 64 },
    color: "white",
  };
  return (
    <Box
      ref={sectionsRes?.beginningOfPageRef}
      sx={{
        backgroundImage: `url(${mode === "dark" ? banner0 : banner1})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minHeight: "600px",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h4" sx={titlesStyle}>
          Hello, I'm
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: 48, md: 64, lg: 72 },
            color: "primary.main",
          }}
        >
          Abdo Khaled
        </Typography>
        <Typography variant="h4" sx={titlesStyle}>
          Front End Developer
        </Typography>
      </Stack>
    </Box>
  );
};
export default Banner;
