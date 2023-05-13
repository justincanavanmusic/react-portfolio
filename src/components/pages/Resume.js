import React from "react";
import resume from "../../assets/justin-canavan-resume-final.pdf";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

let frontEndSkills = [
  "JavaScript",
  "React.js",
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

// let fullStackSkills = [
//   "OOP",
//   "MERN",
//   "MVC"
// ]

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

          <div className="col-12 mx-auto row">
            <div className="col-6">
              <h5 className="font mb-4">Download my resume! </h5>
            </div>
            <div className="col-6">
              <a
                href={resume}
                download="justin-canavan-resume-final.pdf"
                className="font"
              >
                <FontAwesomeIcon icon={faArrowUpFromBracket} size="2xl" />
              </a>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
