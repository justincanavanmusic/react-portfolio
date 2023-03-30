import React from "react";
import resume from "../../assets/justin-canavan-resume.pdf";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';

let frontEndSkills = [
  "Javascript",
  "React",
  "JQuery",
  "CSS",
  "HTML",
  "Bootstrap",
];

let backEndSkills = [
  "APIs",
  "Node.js",
  "Express.js",
  "MySQL/Sequelize",
  "MongoDB/Mongoose",
  "REST",
];



export default function Resume() {
  return (
    <>
      <div className="d-flex flex-row justify-content-evenly mb-3 mt-4 font">
        
      <div className="d-flex p-2">
        <div className='.d-block'>
      <h4 className="mb-4">Front End Skills</h4>
      <ul className="list-group">
          
            {frontEndSkills.map((oneSkill) => (
              <li className="list-group-item">{oneSkill}</li>
            ))}
             </ul>
          </div>
        </div>
     

      <div className="d-flex p-2">
      <div className='.d-block'>
      <h4 className="mb-4">Back End Skills</h4>
        <ul className="list-group">
          {backEndSkills.map((oneSkill) => (
            <li className="list-group-item">{oneSkill}</li>
          ))}
        </ul>
      </div>
      </div>
      </div>
      <div className="mt-5">
      <a href={resume} download="justin-canavan-resume.pdf" className="font">
        Check out my resume!
      </a>
      </div>
      
      

    </>
  );
}
