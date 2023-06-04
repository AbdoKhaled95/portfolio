import React from "react";
import MainContainer from "../Section/MainContainer";
import SectionHead from "../Section/SectionHead";
import { Box, Grid } from "@mui/material";
import { useMainThemeContext } from "../../context/MainThemeContext";
import Education from "./Education";
import Experience from "./Experience";

const Resume = () => {
  const { sectionsRes } = useMainThemeContext();
  return (
    <Box ref={sectionsRes?.resumeRef}>
      <MainContainer>
        <SectionHead title={"Resume"} />
        <Box>
          <Grid
            container
            spacing={6}
            sx={{
              justifyContent: { xs: "center", lg: "space-between" },
            }}
          >
            <Grid item xs={10} lg={6}>
              <Education />
            </Grid>
            <Grid item xs={10} lg={6}>
              <Experience />
            </Grid>
          </Grid>
        </Box>
      </MainContainer>
    </Box>
  );
};
export default Resume;
