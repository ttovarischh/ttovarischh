import React from "react";
import projects from "./projects";
import "./i18n/i18n";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Change this line
import HomePage from "./routes/Home";
import Project from "./routes/Project";
import MNavbar from "./components/Molecules/MNavbar";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MNavbar />
        <Routes>
          <Route path="/" element={<HomePage projects={projects} />} />
          <Route path="/:name" element={<Project />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
