import React from "react";
import resume from "../../assets/justin-canavan-resume.pdf";

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

      <a href={resume} download="justin-canavan-resume.pdf">
        Check out my resume!
      </a>
      
      <div className="d-flex flex-row justify-content-evenly mb-3 mt-5">
        <div className='.d-block'>
      <h4>Front End Skills</h4>
      
    
      <ul className="list-group">
        <div className="d-flex p-2">
          <div className="col-sm">
            {frontEndSkills.map((oneSkill) => (
              <li className="list-group-item">{oneSkill}</li>
            ))}
          </div>
        </div>
      </ul>
      </div>

      <div className="d-flex p-2">
      <div className='.d-block'>
      <h4>Back End Skills</h4>
        <div className="col-sm-2"></div>
        <ul className="list-group">
          {backEndSkills.map((oneSkill) => (
            <li className="list-group-item">{oneSkill}</li>
          ))}
        </ul>
      </div>
      </div>
      </div>

      {/* <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li> */}
    </>
  );
}
