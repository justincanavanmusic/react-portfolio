import React from 'react';
import './Nav.css';

function Nav({ currentPage, changePage, nav}) {
    return (
        <nav style={nav} class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Justin Canavan</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Portfolio"
          
          onClick={() => changePage('Portfolio')}
          
          >Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#AboutMe"
          
          onClick={() => changePage('AboutMe')}

          >About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contact"
          
          onClick={() => changePage('Contact')}
          
          >Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Resume" tabindex="-1" aria-disabled="true"
          
          onClick={() => changePage('Resume')}
          
          >Resume</a>
        </li>
      </ul>
    </div>
  </nav>
    )
}
export default Nav;