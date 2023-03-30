import React from "react";
import './index.css';

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
      <div className="d-flex flex-row flex-wrap justify-content-evenly">
      {projects.map((oneProject) => (
          <div id="portfolio-cards" className="card font mb-3 mt-5">
            <div className="card-body">
    
              <h5 className="card-title">{oneProject.name}</h5>
           
              <a href={oneProject.githubRepo} target="_blank" alt="Github Repo">Github Link</a>
                <br></br>
              <a href={oneProject.liveLink} target="_blank" alt="Project Live Link">
                Live Link
              </a>
            </div>
          </div>
             ))}
      
      </div>
    </>
  );
}
