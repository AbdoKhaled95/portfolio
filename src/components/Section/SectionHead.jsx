import React from "react";
import { Box, Typography } from "@mui/material";

const SectionHead = ({ title }) => {
  return (
    <Box>
      <Typography
        gutterBottom
        sx={{
          fontSize: { md: 32, lg: 52, xl: 72 },
          textAlign: "center",
          py: { xs: "8px", md: "16px", lg: "24px" },
        }}
        variant="h2"
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHead;
