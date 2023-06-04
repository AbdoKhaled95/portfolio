import { Box } from "@mui/material";
import React from "react";
import html5 from "../../assets/images/html5.svg";
import css from "../../assets/images/css.svg";
import javascript from "../../assets/images/javascript.svg";
import typescript from "../../assets/images/typescript.svg";
import react from "../../assets/images/react.svg";
import Bootstrap from "../../assets/images/Bootstrap.svg";
import materialUi from "../../assets/images/material-ui.svg";
import framerMmotion from "../../assets/images/framer-motion.svg";
import SectionHead from "../Section/SectionHead";
import MainContainer from "../Section/MainContainer";

const Skills = ({}) => {
  const skills = [
    { logo: html5 },
    { logo: css },
    { logo: javascript },
    { logo: typescript },
    { logo: react },
    { logo: Bootstrap },
    { logo: materialUi },
    { logo: framerMmotion },
  ];
  return (
    <>
      <Box>
        <MainContainer>
          <SectionHead title={"Skills"} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {skills?.map((skill, index) => (
              <Box
                key={index}
                component={"img"}
                src={skill.logo}
                sx={{ width: { xs: 30, md: 60, lg: 90, xl: 120 } }}
              />
            ))}
          </Box>
        </MainContainer>
      </Box>
    </>
  );
};

export default Skills;
