import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';




const NavBar=(props)=>{
    return(
    <nav  className="topnav">
        <ul className="topnavList">
          <li>
            <Link to="/Todo">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
    </nav>
  );
}
export default NavBar;
