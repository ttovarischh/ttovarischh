// App.tsx
import React, { useState, useEffect, useRef } from "react";
import { projects } from "./db/index";
import "./i18n/i18n";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./routes/Home";
import Project from "./routes/Project";
import WorkPage from "./routes/Work";
import AboutPage from "./routes/About";
import NotFoundPage from "./routes/NotFound";
import M_Footer from "./components/Molecules/M_Footer";
import { useTranslation } from "react-i18next";
import { ScreenSizeProvider } from "./styles/ScreenSizeContext";
import O_Navigation from "./components/Organisms/O_Navigation";
import A_Loader from "./components/Atoms/A_Loader";

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? lightTheme : darkTheme;
  });

  const themeValue = theme === lightTheme ? "light" : "dark";

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    localStorage.setItem("theme", themeValue);
  }, [theme]);

  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language as "en" | "ru";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Router>
        <ScrollToTop />
        <ScreenSizeProvider>
          <O_Navigation theme={themeValue} toggleTheme={toggleTheme} t={t} />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  projects={projects}
                  currentLanguage={currentLanguage}
                  t={t}
                />
              }
            />
            <Route
              path="/work/:name"
              element={<Project currentLanguage={currentLanguage} t={t} />}
            />
            <Route
              path="/work"
              element={
                <WorkPage
                  currentLanguage={currentLanguage}
                  t={t}
                  projects={projects}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  currentLanguage={currentLanguage}
                  t={t}
                  projects={projects}
                />
              }
            />
            <Route
              path="*"
              element={<NotFoundPage currentLanguage={currentLanguage} t={t} />}
            />
          </Routes>
          <M_Footer currentLanguage={currentLanguage} t={t} />
        </ScreenSizeProvider>
      </Router>
    </ThemeProvider>
  );
};

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
    if (prevLocationRef.current !== location.pathname) {
      window.scrollTo(0, 0);
    }
    prevLocationRef.current = location.pathname;
  }, [location]);

  return null;
};

export default App;
