import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import { useMainThemeContext } from "./context/MainThemeContext";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { mode, theme, dir } = useMainThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Header />
      <Box sx={{ pb: "64px" }}>
        <Banner />
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
      </Box>

      <ToastContainer
        limit={1}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        theme={mode}
      />
    </ThemeProvider>
  );
};

export default App;
