import React from "react";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    name: "Gamer's Circuit",
    githubRepo: "https://github.com/justincanavanmusic/electronics-e-commerce",
    liveLink:  "https://shielded-basin-55972.herokuapp.com/",
  },
  {
    name: "CodeCove",
    githubRepo:  "https://github.com/justincanavanmusic/tech-blog",
    liveLink:     "https://floating-fortress-15177.herokuapp.com/",
  },
  {
    name: "Chicago Hotspot",
    githubRepo:  "https://github.com/allisonnault/Chicago-Attractions",
    liveLink:   "https://ancient-wildwood-93900.herokuapp.com/",
  },
  {
    name: "Music Dashboard",
    githubRepo:  "https://github.com/justincanavanmusic/music-dashboard",
    liveLink:  "https://justincanavanmusic.github.io/music-dashboard/",
  }
 
]

export default function Portfolio() {
  return (
    <>
    <div className='container pb-5'>
    <div className='row'>
    
      {projects.map((oneProject) => (
          <div className='col-9 col-sm-9 col-md-6 col-lg-6 contact-card'>
          <div className="card footer-background dark-blue-font mt-5">
            <div className="card-body">
    
              <h5 className="card-title text-start mb-4">{oneProject.name}</h5>
              <div className="d-flex justify-content-between">
              <a href={oneProject.githubRepo} target="_blank" alt="Github Repo"><FontAwesomeIcon icon={faGithub} className='icon-color' size="2xl" /></a>
                
              <a href={oneProject.liveLink} target="_blank" alt="Project Live Link">
              <FontAwesomeIcon icon={faDesktop} size="2xl" className='icon-color'/>
              </a>
              </div>
            </div>
          </div>
          </div>
             ))}
      

      </div>
      </div>
    </>
  );
}
