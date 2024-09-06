import React, { useState, useEffect } from 'react';
import projects from './projects'

function App() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <img src={project.cover} alt={project.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

