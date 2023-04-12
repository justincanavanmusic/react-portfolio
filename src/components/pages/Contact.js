import React, { useState } from "react";
import "./index.css";

const submitButton = (e) => {
  e.preventDefault();
  if ("cool" === "cool") {
    console.log(e.target);
  }
};

export default function Contact({ font }) {
  const [name, setName] = useState("");
  const [nameModal, setNameModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailModal, setEmailModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messageModal, setMessageModal] = useState(false);

  const nameValidation = (oneName) => {
    if (oneName.length > 0) {
      setName(oneName);
    } else setNameModal(true);
  };

  const validateEmail = (input) => {
    const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;

    if (input.match(emailRegex)) {
      setEmail(input);
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
        <div id="modal-display" className="page-vh modal m-3 p-3">
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

      <div className="container col-12 text-center mt-5 ">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            {/* <div className="mb-3"> */}
              <h4 className='h4-contact mb-5'>Send me a message!</h4>
            
              <div className='d-flex justify-content-center'>
              <div className='card list-items contact-card col-md-9 col-lg-9'>
              <label htmlFor="exampleFormControlInput1" className="pt-2 pb-2">
                Name
              </label>
              <div className='message-input col-lg-10 col-md-10'>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Doe"
                defaultValue={name}
                onBlur={(e) => nameValidation(e.target.value)}
                required
              ></input>
              </div>
            {/* </div> */}
            <div>
              <label
                id="email"
                htmlFor="exampleFormControlInput1"
                className="pt-2 pb-2 list-items"
              >
                Email address
              </label>
              <div className='message-input col-lg-10 col-md-10'>
              <input
                type="email"
                className="form-control"
                defaultValue={email}
                onBlur={(e) => validateEmail(e.target.value)}
                id="email"
                placeholder="name@example.com"
              ></input>
              </div>
            </div>

            {/* modal */}

            {emailModal && (
              <div id="modal-display" className="modal m-3 p-3">
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
            {/* <div className='container'></div> */}
            <div>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="pt-2 pb-2 list-items"
              >
                Message
              </label>
              <div className='message-input col-lg-10 col-md-10'>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                onBlur={(e) => messageValidation(e.target.value)}
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
        <div className='col-lg-6 submit-btn d-flex justify-content-center'>
            <button
              type="button"
              className="btn btn-info mt-3 mb-3"
              onClick={submitButton}
            >
              Submit
            </button>
            
            </div>
            </div>
          </div>
          </div>

          {/* <div className="mb-5"> */}
          {/* <div className='container'> */}

          <div className="col-sm-12 col-md-6 col-lg-6">
            <h4 className="mb-4 h4-contact mb-5">Contact</h4>

            
            <div className="card contact-card col-lg-8 col-md-6">
         

            <ul className="list-group">
              <li className="list-items list-group-item">Email</li>
              <a
                className="pt-2 pb-2 contact-links"
                href="mailto:justincanavanmusic@gmail.com"
                target="_blank"
                alt="email"
              >
                justincanavanmusic@gmail.com
              </a>
              <li className="list-items list-group-item">Phone</li>
              <a
                className= "pt-2 pb-2 contact-links"
                href="tel:2012188720"
                target="_blank"
                alt="phone"
              >
                201-218-8720
              </a>
              <li className="list-items list-group-item">Github</li>
              
              <a
                className="pt-2 pb-2 contact-links"
                href="https://github.com/justincanavanmusic"
                target="_blank"
                alt="github"
              >
               Check out my Github!
              </a>
              <li className="list-items list-group-item">something here</li>
            </ul>
            
          </div>
        </div>
        </div>
        </div>


    </>
  );
}
