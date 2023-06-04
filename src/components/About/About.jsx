import React from "react";
import MainContainer from "../Section/MainContainer";
import SectionHead from "../Section/SectionHead";
import { Box } from "@mui/material";
import AboutContent from "./AboutContent";
import { useMainThemeContext } from "../../context/MainThemeContext";

const About = () => {
  const { sectionsRes } = useMainThemeContext();
  return (
    <Box ref={sectionsRes?.aboutRef}>
      <MainContainer>
        <SectionHead title={"About Me"} />
        <AboutContent />
      </MainContainer>
    </Box>
  );
};
export default About;
