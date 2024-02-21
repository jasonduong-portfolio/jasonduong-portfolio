// ProjectPage.tsx

import React, { useEffect, useState } from 'react';
import NavBar from '../../components/Navbar/Navbar.tsx';
import './ProjectsPage.css';

const ProjectPage: React.FC = () => {
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Simulate the page loading delay (you can remove this in production)
    const delayTimer = setTimeout(() => {
      setPageLoaded(true);
    }, 1000);

    // Clear the timer on component unmount
    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <div className={`project-page ${pageLoaded ? 'loaded' : ''}`}>
      <div className="left-door"></div>
      <div className="right-door"></div>
      {/* Your actual content goes here */}
      <div className={`project-content ${pageLoaded ? 'visible' : ''}`}>
        <NavBar/> 
        <div>
          <h1>Your Project Title</h1>
          <p>Project details and content go here.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
