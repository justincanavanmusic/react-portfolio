import React from "react";
import resume from "../../assets/justin-canavan-resume-FINAL.pdf";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

let frontEndSkills = [
  "Javascript",
  "React",
  "JQuery",
  "Handlebars.js",
  "Webpack",
  "Bootstrap/CSS",
  "HTML",
];

let backEndSkills = [
  "API",
  "Node.js",
  "Express.js",
  "MySQL/Sequelize",
  "MongoDB/Mongoose",
  "ORM",
  "REST",
];

let fullStackSkills = ["OOP", "MERN", "MVC"];

export default function Resume() {
  return (
    <>
      <div className="container page-container">
        <div className="row">
          <div className="mx-auto col-9 col-sm-6 col-md-5 col-lg-5">
            <div className="d-block">
              <h4 className="mt-4 mb-4">Front End Proficiencies</h4>
              <ul className="list-group">
                {frontEndSkills.map((oneSkill) => (
                  <li className="list-items list-group-item">{oneSkill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto col-9 col-sm-6 col-md-5 col-lg-5">
            <div className="d-block">
              <h4 className="mt-4 mb-4">Back End Proficiencies</h4>
              <ul className="list-group">
                {backEndSkills.map((oneSkill) => (
                  <li className="list-group-item list-items">{oneSkill}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto col-9 col-sm-6 col-md-5 col-lg-5">
            <div className="d-block">
              <h4 className="mt-4 mb-4">Full-Stack Proficiencies</h4>
              <ul className="list-group">
                {fullStackSkills.map((oneSkill) => (
                  <li className="list-items list-group-item">{oneSkill}</li>
                ))}
              </ul>

              <div className="mt-5 mb-4">
                <h5 className="font mb-4">
                  Download my resume with the icon below!
                </h5>
                <a
                  href={resume}
                  download="justin-canavan-resume-FINAL.pdf"
                  className="font"
                >
                  <FontAwesomeIcon className='mb-3' icon={faArrowUpFromBracket} size="2xl" />
                </a>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
