import React from 'react';
import './Nav.css';

function Nav({ currentPage, changePage, font}) {
    return (
        <nav style={font} className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Justin Canavan</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#Portfolio"
          
          onClick={() => changePage('Portfolio')}
          
          >Portfolio</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'} href="#AboutMe" 
          
          onClick={() => changePage('AboutMe')}

          >About Me</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#Contact"
          
          onClick={() => changePage('Contact')}
          
          >Contact</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'} href="#Resume" tabIndex="-1" aria-disabled="true"
          
          onClick={() => changePage('Resume')}
          
          >Resume</a>
        </li>
      </ul>
    </div>
  </nav>
    )
}
export default Nav;