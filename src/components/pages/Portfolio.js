import React from "react";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    name: "Music Dashboard",
    githubRepo:  "https://github.com/justincanavanmusic/music-dashboard",
    liveLink:  "https://justincanavanmusic.github.io/music-dashboard/",
  },
  {
    name: "Chicago Hotspot",
    githubRepo:  "https://github.com/allisonnault/Chicago-Attractions",
    liveLink:   "https://ancient-wildwood-93900.herokuapp.com/",
  },
  {
    name: "Tech Blog",
    githubRepo:  "https://github.com/justincanavanmusic/tech-blog",
    liveLink:     "https://floating-fortress-15177.herokuapp.com/",
  },
  {
    name: "Note Taker",
    githubRepo:  "https://github.com/justincanavanmusic/note-taker",
    liveLink:     "https://whispering-beach-30284.herokuapp.com/",
  },
  {
    name: "E-Commerce",
    githubRepo:  "https://github.com/justincanavanmusic/e-commerce",
    liveLink:     "https://drive.google.com/file/d/15MhGYxOhOXy701-hpVT0WT51Khw79zJt/view",
  },
  {
    name: "SVG Logo Maker",
    githubRepo:  "https://github.com/justincanavanmusic/svg-logo-maker",
    liveLink:     "https://drive.google.com/file/d/1R2JbRVDBKh-ebA42rOFa2huIgIDQeWPf/view?usp=share_link",
  },
 
]

export default function Portfolio() {
  return (
    <>
      <div className="d-flex flex-row flex-wrap justify-content-evenly footer-font-color">
      {projects.map((oneProject) => (
          <div id="portfolio-cards" className="card footer-background font mt-5">
            <div className="card-body">
    
              <h5 className="card-title mb-4">{oneProject.name}</h5>
              <div className="d-flex justify-content-between">
              <a href={oneProject.githubRepo} target="_blank" alt="Github Repo"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
                
              <a href={oneProject.liveLink} target="_blank" alt="Project Live Link">
              <FontAwesomeIcon icon={faDesktop} size="2xl" style={{"--fa-secondary-color": "#005cfa",}}/>
              </a>
              </div>
            </div>
          </div>
             ))}
      
      </div>
    </>
  );
}
