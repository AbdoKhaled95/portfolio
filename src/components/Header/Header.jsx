import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import HeaderLogo from "./HeaderLogo";
import HeaderDrawer from "./HeaderDrawer";
import MainLink from "../Links/MainLink";
import { useMainThemeContext } from "../../context/MainThemeContext";
import ToggleNav from "../Buttons/ToggleNav";
import ToggleColorMode from "../Buttons/ToggleColorMode";

const headerHeight = 72;
const Header = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const { trigger, sectionsRes } = useMainThemeContext();
  const links = [
    { text: "Home", elementRef: sectionsRes?.beginningOfPageRef },
    { text: "About", elementRef: sectionsRes?.aboutRef },
    { text: "Portfolio", elementRef: sectionsRes?.portfolioRef },
    { text: "Resume", elementRef: sectionsRes?.resumeRef },
    { text: "Contact", elementRef: sectionsRes?.contactRef },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          height: headerHeight,
          backgroundColor: trigger ? "custom.headerBg" : "transparent",
          boxShadow: `0 0 15px rgba(0,0,0,0.2)`,
        }}
      >
        <Container
          sx={{ px: { xs: "24px", md: "48px", lg: "88px" } }}
          maxWidth="container"
        >
          <Toolbar
            variant="dense"
            sx={{
              height: headerHeight,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ToggleNav
              isOpened={isDrawerOpened}
              onClick={() => setIsDrawerOpened(!isDrawerOpened)}
              trigger={trigger}
            />

            <HeaderLogo trigger={trigger} />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              {links.map((link, i) => (
                <MainLink
                  elementRef={link?.elementRef}
                  key={i}
                  text={link?.text}
                  trigger={trigger}
                />
              ))}
              <ToggleColorMode />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <HeaderDrawer
        trigger={trigger}
        setIsDrawerOpened={setIsDrawerOpened}
        isDrawerOpened={isDrawerOpened}
        links={links}
        headerHeight={headerHeight}
      />
    </>
  );
};

export default Header;
