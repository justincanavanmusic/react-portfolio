import React from "react";
import "./Nav.css";
import "../index.css";

function Nav({ currentPage, changePage }) {
  return (
    <nav className="footer-background footer-font-color navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Justin Canavan
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
                href="#Portfolio"
                onClick={() => changePage("Portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  currentPage === "AboutMe" ? "nav-link active" : "nav-link"
                }
                href="#AboutMe"
                onClick={() => changePage("AboutMe")}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
                href="#Contact"
                onClick={() => changePage("Contact")}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
                href="#Resume"
                onClick={() => changePage("Resume")}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
