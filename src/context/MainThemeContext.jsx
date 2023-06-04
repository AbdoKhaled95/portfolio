import { createTheme, useScrollTrigger } from "@mui/material";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import mainColor from "../utils/Colors";

const MainThemeContext = createContext();
const MainThemeProvider = ({ children }) => {
  const dir = "ltr";
  const lang = "en";

  const [mode, setMode] = useState(localStorage?.getItem("mode") || "light");

  useEffect(() => {
    localStorage?.getItem("mode") && setMode(localStorage?.getItem("mode"));
  }, [mode]);

  const theme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            container: 1920,
          },
        },
        direction: dir,
        palette: {
          mode: mode,
          primary: {
            main: mainColor,
            contrastText: mode === "light" ? "#fff" : "#000",
          },
          secondary: {
            main: "rgba(255, 255, 255, 0.4)",
          },
          custom: {
            headerText: mode === "light" ? "#fff" : "#000",
            headerBg: mode === "light" ? "rgb(0,0,0,.85)" : "#fff",
            boxShadowColor:
              mode === "light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)",
          },
        },

        typography: {
          fontFamily: "Archivo, sans-serif",
          h1: {
            fontWeight: 700,
            fontSize: 18,
            textAlign: "center",
          },
          h2: {
            fontWeight: 700,
            fontSize: 24,
          },
          h3: {
            fontWeight: 700,
            fontSize: 16,
            textAlign: "center",
          },
          h4: {
            fontWeight: 500,
            fontSize: 32,
            textAlign: "center",
          },
          h5: {
            fontSize: 24,
            fontWeight: 500,
          },
          body1: {
            fontWeight: 400,
            fontSize: 14,
          },
          body2: {
            fontSize: 18,
            fontWeight: 400,
          },
          caption: {
            fontSize: 10,
            fontWeight: 500,
          },
          caption2: {
            fontSize: 14,
            fontWeight: 400,
          },
          bannerCaption: {
            fontSize: 10,
            fontWeight: 500,
          },
          button: {
            textTransform: "none",
            fontSize: 8,
            fontWeight: 700,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                width: 120,
                height: 35,
                padding: 0,
                borderRadius: 15,
                fontSize: 14,
              },
            },
          },
          MuiLink: {
            styleOverrides: {
              root: {
                cursor: "pointer",
                textDecoration: "none",
                transition: "all .3s",
                fontWeight: 500,
                fontSize: "18px",
              },
            },
          },
        },
      }),
    [mode]
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(() =>
          localStorage?.getItem("mode") === "light"
            ? localStorage?.setItem("mode", "dark")
            : localStorage?.setItem("mode", "light")
        );
      },
    }),
    [mode]
  );
  const sectionsRes = {
    beginningOfPageRef: useRef(null),
    aboutRef: useRef(null),
    portfolioRef: useRef(null),
    resumeRef: useRef(null),
    contactRef: useRef(null),
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 250,
  });
  return (
    <MainThemeContext.Provider
      value={{
        mode,
        colorMode,
        theme,
        dir,
        lang,
        trigger,
        sectionsRes,
      }}
    >
      {children}
    </MainThemeContext.Provider>
  );
};

export default MainThemeProvider;
export const useMainThemeContext = () => {
  return useContext(MainThemeContext);
};
