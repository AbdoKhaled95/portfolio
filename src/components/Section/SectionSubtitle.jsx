import { Typography } from "@mui/material";
import React from "react";

const SectionSubtitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        textAlign: "start",
        fontSize: { xs: 18, md: 24, lg: 32 },
        py: { xs: "8px", lg: "12px" },
        pb: { xs: "16px", lg: "32px" },

        fontWeight: 400,
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionSubtitle;
