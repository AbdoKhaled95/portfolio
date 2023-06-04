import React from "react";
import PortFolioCard from "../Cards/PortFolioCard";
import { useMainThemeContext } from "../../context/MainThemeContext";
import { Box } from "@mui/material";
import MainContainer from "../Section/MainContainer";
import SectionHead from "../Section/SectionHead";

const Portfolio = () => {
  const { sectionsRes } = useMainThemeContext();
  return (
    <Box ref={sectionsRes?.portfolioRef}>
      <MainContainer>
        <SectionHead title={"Portfolio"} />
        <PortFolioCard />
      </MainContainer>
    </Box>
  );
};

export default Portfolio;
