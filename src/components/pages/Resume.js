import React from "react";
import resume from "../../assets/justin-canavan-resume.pdf";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';


let frontEndSkills = [
  "Javascript",
  "React",
  "JQuery",
  "Handlebars.js",
  "Webpack",
  "CSS",
  "Bootstrap",
  "HTML",
  
];

let backEndSkills = [
  "API",
  "Node.js",
  "Express.js",
  "MySQL/Sequelize",
  "MongoDB/Mongoose",
  "ORM",
  "REST"
];

let fullStackSkills = [
  "OOP",
  "MERN",
  "MVC"
]

export default function Resume() {
  return (
    <>
      <div className="page-container d-flex flex-row justify-content-evenly mb-3 mt-4 font">
        
      <div className="d-flex p-2">
        <div className='d-block'>
      <h4 className="mb-4">Front End Proficiencies</h4>
      <ul className="list-group">
       
            {frontEndSkills.map((oneSkill) => (
              <li className="list-items list-group-item">{oneSkill}</li>
            ))}
             </ul>
          </div>
        </div> 
        
        <div className="d-flex p-2">
          <div className='d-block'>
        <h4 className="mb-4">Full-Stack Proficiencies</h4>
        <ul className="list-group">
         
              {fullStackSkills.map((oneSkill) => (
                <li className="list-items list-group-item">{oneSkill}</li>
              ))}
               </ul>
               <div className='container'>
      <div className="d-flex mb-5 justify-content-center">
        <div className="mb-5">
        <h5 className="font resume-margin mb-4">Download my resume with the icon below!</h5>
      <a href={resume} download="justin-canavan-resume.pdf" className="font">
      <FontAwesomeIcon icon={faArrowUpFromBracket} size="2xl" />
      </a>
      <br></br>
      </div>
      </div>
      </div>
            </div>
          </div> 

      <div className="d-flex p-2">
      <div className='d-block'>
      <h4 className="mb-4">Back End Proficiencies</h4>
        <ul className="list-group">
          {backEndSkills.map((oneSkill) => (
            <li className="list-group-item list-items">{oneSkill}</li>
          ))}
        </ul >
      </div>
      </div>
      </div>
    </>
  );
}
