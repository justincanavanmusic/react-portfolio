import React, { useState } from "react";
import "./index.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const initialInput = {
    name: "",
    email: "",
  };

  const [userInput, setUserInput] = useState(initialInput);

  const { name, email } = userInput;

  const [nameModal, setNameModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messageModal, setMessageModal] = useState(false);

  const contactInfo = [
    {
      icon: <AiOutlineMail />,
      contact: "justincanavanmusic@gmail.com",
      href: "mailto:justincanavanmusic@gmail.com",
    },
    {
      icon: <BsFillTelephoneFill />,
      contact: "201-218-8720",
      href: "tel:2012188720",
    },
  ];

  const messageForm = [
    {
      title: "Name",
      name: "name",
      placeholder: "John Doe",
    },
    {
      title: "Email Address",
      name: "email",
      placeholder: "name@example.com",
    },
  ];

  const inputChange = (e) => {
    const { name, email, value } = e.target;
    // console.log(userInput)

    setUserInput(() => {
      return {
        ...userInput,
        [name]: value,
        [email]: value,
      };
    });
  };

  const messageChange = (e) => {
    const { value } = e.target;
    // console.log(name)

    return setMessage(value);
  };

  const submitButton = (e) => {
    e.preventDefault();

    // console.log('hello')
    console.log(userInput);

    setUserInput(initialInput);
    setMessage("");
  };

  const nameValidation = (nameInput) => {
    console.log(nameInput.length);
    if (nameInput.length > 0) {
      setUserInput(nameInput);
    } else setNameModal(true);
  };

  const validateEmail = (input) => {
    const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;

    if (input.match(emailRegex)) {
      setUserInput(input);
      console.log(input);
    } else {
      setEmailModal(true);
    }
  };

  const messageValidation = (message) => {
    if (message.length > 0) {
      setMessage(message);
    } else setMessageModal(true);
  };

  return (
    <>
      {nameModal && (
        <div id="modal-display" className="black-font page-vh modal m-3 p-3">
          <div tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Required Field</h5>
                  <button
                    onClick={() => setNameModal(false)}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Please enter your name!</p>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container page-container text-center mt-5 ">
        <div className="row">
          <div className="mx-auto col-sm-12 col-md-9 col-lg-6">
            <h4 className="cream-font mb-3">Send me a message!</h4>
            <hr className="w-50 mb-4 mx-auto opacity-75"></hr>

            <div className="d-flex justify-content-center">
              <div className="card mb-5 list-items contact-card col-12 col-sm-12 col-md-10 col-lg-10">
                {messageForm.map((oneForm) => (
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="pt-2 pb-2"
                    >
                      {oneForm.title}
                    </label>
                    <div className="message-input col-sm-10 col-lg-10 col-md-10">
                      <input
                        type="text"
                        name={oneForm.name}
                        className="form-control"
                        placeholder={oneForm.placeholder}
                        value={oneForm.name === "name" ? name : email}
                        onChange={inputChange}
                        onBlur={(e) =>
                          oneForm.name === "name"
                            ? nameValidation(e.target.value)
                            : validateEmail(e.target.value)
                        }
                        required
                      ></input>
                    </div>
                  </div>
                ))}

                {emailModal && (
                  <div id="modal-display" className="black-font modal m-3 p-3">
                    <div tabIndex="-1">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Email verification</h5>
                            <button
                              onClick={() => setEmailModal(false)}
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>Please make sure to use proper email format!</p>
                          </div>
                          <div className="modal-footer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pt-2 pb-2 list-items"
                  >
                    Message
                  </label>
                  <div className="message-input col-lg-10 col-md-10 col-sm-10">
                    <textarea
                      onChange={messageChange}
                      value={message}
                      className="form-control"
                      id="message"
                      rows="3"
                      onBlur={(e) => messageValidation(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>

                {messageModal && (
                  <div id="modal-display" className="modal m-3 p-3">
                    <div tabIndex="-1">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Required Field</h5>
                            <button
                              onClick={() => setMessageModal(false)}
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>Please enter a message!</p>
                          </div>
                          <div className="modal-footer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-lg-6 margin-auto d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-info mt-3 mb-3"
                    onClick={submitButton}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="margin-auto col-12 col-sm-12 col-md-9 col-lg-6">
            <h4 className="mb-3 cream-font">Contact</h4>
            <hr className="w-50 mx-auto mb-4 opacity-75"></hr>

            <div className="card contact-card mb-5 col-lg-10 col-md-10 col-sm-12 col-12">
              {contactInfo.map((infoArray) => (
                <ul className="list-group">
                  <a
                    href={infoArray.href}
                    className="list-items no-radius list-group-item contact-links"
                    target="_blank"
                 
                    alt="email"
                  >
                    {infoArray.icon}
                  </a>
                  <li
                    className="pt-2 pb-2 list-dots med-blue-background cream-font"

                  >
                    {infoArray.contact}
                  </li>
                </ul>
              ))}
              <a
                className="pt-2 pb-2 list-group-item list-items contact-links"
                href="https://github.com/justincanavanmusic"
                target="_blank"
                alt="github"
              >
                <FaGithub className="react-icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
