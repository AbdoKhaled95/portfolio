import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SectionSubtitle from "../Section/SectionSubtitle";
import SocialLinks from "../SocialLinks/SocialLinks";

const ContactDetails = () => {
  const fontSize = { xs: 14, md: 16, lg: 18, xl: 20 };

  return (
    <Box>
      <SectionSubtitle title={"Contact Details"} />

      <Stack spacing={2}>
        <Box>
          <Typography
            sx={{ fontSize: fontSize, color: "primary.main", fontWeight: 500 }}
          >
            E-mail
          </Typography>
          <Typography sx={{ fontSize: fontSize }}>
            abdokhaled270619@gmail.com
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: fontSize, color: "primary.main", fontWeight: 500 }}
          >
            Phone
          </Typography>
          <Typography sx={{ fontSize: fontSize }}>+20 109 849 3579</Typography>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: fontSize, color: "primary.main", fontWeight: 500 }}
          >
            Address
          </Typography>
          <Typography sx={{ fontSize: fontSize }}>Cairo, Egypt</Typography>
        </Box>
        <Box>
          <SocialLinks />
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactDetails;
