import React from "react";
import ResumeCard from "../Cards/ResumeCard";

const Education = () => {
  const items = [
    {
      duration: "Mar 2022 - Sep 2022",
      cardTitle: "Front-End Web Development Diploma",
      cardDescription:
        "A specialized certification program that focuses on teaching the technical skills and best practices required to create visually appealing and user-friendly websites and applications.",
      place: "Route Academy",
    },
    {
      duration: "Sep 2013 - May 2017",
      cardTitle: "Bachelor's degree",
      cardDescription:
        "Bachelor's degree in Commerce program typically provides students with a broad understanding of business principles and practices, and covers subjects such as accounting, economics, marketing,and management.",
      place: "Cairo University",
    },
  ];
  return <ResumeCard items={items} title={"Education"} />;
};

export default Education;
