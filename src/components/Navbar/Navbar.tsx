// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white p-4 fixed w-full top-0 border-b border-black opacity-0 hover:opacity-100 transition-opacity duration-500">
      <div className="flex justify-between ml-5 mr-5">
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">jason duong.</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/resume">resume</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
