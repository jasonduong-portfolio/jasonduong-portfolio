import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.css'
import LandingPage from './pages/LandingPage/Landing.tsx';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.tsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResumePage from './pages/ResumePage/ResumePage.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/resume" component={ResumePage}/>
        <Route path="/contact"/>
      </Switch>
    </Router>
  </React.StrictMode>
);

