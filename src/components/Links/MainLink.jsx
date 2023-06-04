import { Link } from "@mui/material";
import React from "react";
import scrollToSection from "../../utils/scrollToSection";

const MainLink = ({ text, trigger, elementRef }) => {
  return (
    <Link
      onClick={elementRef ? () => scrollToSection(elementRef) : undefined}
      sx={{
        color: trigger ? "custom.headerText" : "white",
        ":hover": {
          color: "primary.main",
          translate: "2px",
        },
      }}
    >
      {text}
    </Link>
  );
};

export default MainLink;
