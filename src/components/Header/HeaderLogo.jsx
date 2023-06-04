import { Box, Typography } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
const HeaderLogo = ({ trigger }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      <CodeIcon
        sx={{
          fontSize: { xs: 18, md: 24, lg: 32 },
          color: "primary.main",
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: 18, md: 24, lg: 32 },
          color: "primary.main",
        }}
      >
        Portfolio
      </Typography>
      <CodeOffIcon
        sx={{
          fontSize: { xs: 18, md: 24, lg: 32 },
          color: "primary.main",
        }}
      />
      <Typography
        variant="h1"
        sx={{
          fontSize: { md: "24px", lg: "32px" },
          color: "primary.main",
          visibility: "hidden",
        }}
      >
        Abdo Khaled
      </Typography>
    </Box>
  );
};

export default HeaderLogo;
