import { IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useMainThemeContext } from "../../context/MainThemeContext";
const ToggleColorMode = ({}) => {
  const { mode, colorMode } = useMainThemeContext();
  const { toggleColorMode } = colorMode;

  return (
    <IconButton
      onClick={() => toggleColorMode()}
      sx={{
        color: "primary.main",
      }}
    >
      {mode === "light" ? (
        <LightModeIcon fontSize="large" />
      ) : (
        <DarkModeIcon fontSize="large" />
      )}
    </IconButton>
  );
};

export default ToggleColorMode;
