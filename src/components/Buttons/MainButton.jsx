import { Button } from "@mui/material";
import React from "react";

const MainButton = ({
  variant = "contained",
  text,
  component,
  href,
  target,
  onClick,
  type = "submit",
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      component={component}
      href={href}
      target={target}
      variant={variant}
      sx={{
        fontSize: { md: 16, lg: 18, xl: 20 },
        width: { md: 140, lg: 160, xl: 180 },
        height: { md: 40, lg: 50, xl: 55 },
      }}
    >
      {text}
    </Button>
  );
};

export default MainButton;
