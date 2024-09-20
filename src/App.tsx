import React, { useState, useEffect } from 'react';
import projects from './projects';
import './i18n/i18n';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Change this line
import HomePage from './routes/Home';
import Project from './routes/Project';
import MNavbar from './components/Molecules/MNavbar';
import CurtainEffect from './components/Atoms/CurtainComponent';
import Loader from './components/Atoms/ALoader'; // Import your Loader component

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after the timeout
    }, 3000); // Change this to the desired loading time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* {loading && <Loader />} */}
        <MNavbar />
        {/* <CurtainEffect /> */}
        <Routes>
          <Route path="/" element={<HomePage projects={projects} />} />
          <Route path="/:name" element={<Project />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
