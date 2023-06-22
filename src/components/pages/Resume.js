import React from "react";
import resume from "../../assets/jc-res-5-12.pdf";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faArrowRight, faFile } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons' 

let frontEndSkills = [
  "JavaScript",
  "React.js",
  "TypeScript",
  "Handlebars.js",
  "Webpack",
  "CSS",
  "JQuery",
  "HTML",
];

let backEndSkills = [
  "Node.js",
  "Express.js",
  "RESTful API",
  "MySQL/Sequelize",
  "NOSQL",
  "MongoDB/Mongoose",
  "GraphQL",
  "AWS",
];

export default function Resume() {
  return (
    <>
      <div className="container-fluid pb-5">
        <div className="row mx-auto flex-wrap col-12">
          <div className="d-flex col-md-6 col-lg-6 col-sm-6 col-12 p-2 mb-5">
            <div className="col-8 mx-auto">
              <div className="d-block">
                <h4 className="mb-3 mt-3">Front End Proficiencies</h4>
                <hr className="resume-hr mb-4 mx-auto opacity-75"></hr>
                <ul className="list-group">
                  {frontEndSkills.map((oneSkill) => (
                    <li className="list-items list-group-item">{oneSkill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex col-md-6 col-lg-6 col-sm-6 col-12 mb-4 p-2">
            <div className="col-8 mx-auto">
              <div className="d-block">
                <h4 className="mb-3 mt-3">Back End Proficiencies</h4>
                <hr className="resume-hr mb-4 mx-auto opacity-75"></hr>
                <ul className="list-group">
                  {backEndSkills.map((oneSkill) => (
                    <li className="list-group-item list-items">{oneSkill}</li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </div>

          <div className="col-12 mx-auto row">
            <div className="col-6">
              <h5 className="code-font">Check out my resume! </h5>
              <br></br>
              <FontAwesomeIcon icon={faArrowRight} fade size="2xl" />
            </div>
            <div className="col-6">
            <h5 className="code-font font">Download below!</h5>
            <br></br>
              <a
                href={resume}
                download="jc-res-5-12.pdf"
                className="font"
              >
<FontAwesomeIcon className='' icon={faFile} fade size="2xl" style={{color: "#f0ebd8",}} />
              </a>
            </div>
            <br></br>
          </div>

      </div>
    </>
  );
}
