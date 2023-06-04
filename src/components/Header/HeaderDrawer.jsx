import { Divider, List, ListItem, Drawer, Link } from "@mui/material";
import React, { useState } from "react";
import MainLink from "../Links/MainLink";
import { useMainThemeContext } from "../../context/MainThemeContext";
import ToggleColorMode from "../Buttons/ToggleColorMode";

const drawerWidth = 260;
const HeaderDrawer = ({ isDrawerOpened, links, headerHeight }) => {
  const { trigger } = useMainThemeContext();

  const [anchor, setAnchor] = useState("left");
  return (
    <>
      <Drawer
        variant="persistent"
        open={isDrawerOpened}
        sx={{
          display: { xs: "block", md: "none" },

          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            top: headerHeight,
            backgroundColor: trigger ? "custom.headerBg" : "transparent",
          },
        }}
        anchor={anchor}
      >
        <Divider />
        <List>
          {links.map((link, index) => (
            <ListItem key={index}>
              <MainLink
                trigger={trigger}
                elementRef={link?.elementRef}
                text={link?.text}
              />
            </ListItem>
          ))}
          <ListItem>
            <ToggleColorMode />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default HeaderDrawer;
