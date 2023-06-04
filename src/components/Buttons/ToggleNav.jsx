import { IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const ToggleNav = ({ onClick, isOpened, trigger }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        display: { xs: "flex", md: "none" },
        color: trigger ? "custom.headerText" : "white",
        ":hover": {
          color: "primary.main",
        },
      }}
    >
      {isOpened ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
};

export default ToggleNav;
