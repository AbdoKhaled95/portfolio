import React from "react";
import ResumeCard from "../Cards/ResumeCard";

const Experience = () => {
  const items = [
    {
      duration: "Aug 2022 - Present",
      cardTitle: "Front-End Developer",
      cardDescription:
        "I work for this company at the present time in Cairo, Egypt, as a member of a team developing websites and providing technical support for existing projects",
      place: "Montasher for Software Solutions",
    },
    {
      duration: "Aug 2021 - Aug 2022",
      cardTitle: "Front-End Developer",
      cardDescription:
        "I worked in this company as Front-End Developer for a year, During this year, I developed landing page websites and provided technical support for existing projects.",
      place: "CodeIn for Software Solutions",
    },
  ];
  return <ResumeCard items={items} title={"Experience"} />;
};

export default Experience;
