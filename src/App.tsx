import React from 'react';
import projects from './projects';
import './i18n/i18n';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Only use BrowserRouter
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/Home';
import Project from './routes/Project';
import MNavbar from './components/Molecules/MNavbar';
import CurtainEffect from './components/Atoms/CurtainComponent';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Router> */}
        <MNavbar />
        <CurtainEffect />
        <Routes>
          <Route path="" element={<HomePage projects={projects} />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
        {/* </Router> */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
