import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import MainContainer from "../Section/MainContainer";
import SectionHead from "../Section/SectionHead";
import { useMainThemeContext } from "../../context/MainThemeContext";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  const { sectionsRes } = useMainThemeContext();

  return (
    <Box ref={sectionsRes?.contactRef}>
      <MainContainer>
        <SectionHead title={"Get In Touch"} />
        <Box>
          <Grid
            columns={22}
            container
            spacing={2}
            sx={{
              justifyContent: { xs: "center", lg: "space-between" },
            }}
          >
            <Grid item xs={18} lg={10}>
              <ContactForm />
            </Grid>
            <Grid item xs={18} lg={10}>
              <ContactDetails />
            </Grid>
          </Grid>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default Contact;
