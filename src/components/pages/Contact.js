import React, { useState } from "react";
// import './index.css'


const submitButton = (e) => {
  e.preventDefault();
  if ("cool" === "cool") {
    console.log(e.target);
  }
};

export default function Contact({ font }) {
  const [name, setName] = useState("")
  const [nameModal, setNameModal] = useState(false)
  const [email, setEmail] = useState("");
  const [emailModal, setEmailModal] = useState(false);
  const [message, setMessage] = useState('')
  const [messageModal, setMessageModal] = useState(false)

const nameValidation = (oneName) => {
  if (oneName.length>0) {
    setName(oneName)
  } else
  setNameModal(true)
} 

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
    if (message.length>0) {
      setMessage(message)
    } else
    setMessageModal(true)
  }


  return (
    <>
    {nameModal && (
      
      <div id="modal-display" className="modal m-3 p-3">
      <div tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Required Field</h5>
              <button onClick={() => setNameModal(false)}
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Please enter your name!</p>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
      </div>
    
    )}
      <div style={font} className="container text-center col-5 mt-5 ">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
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
        <div className="mb-3">
          <label id="email" for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            defaultValue={email}
            onBlur={(e) => validateEmail(e.target.value)}
            id="email"
            placeholder="name@example.com"
          ></input>
        </div>

            {/* modal */}

        {emailModal && (
      
          <div id="modal-display" className="modal m-3 p-3">
          <div tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Email verification</h5>
                  <button onClick={() => setEmailModal(false)}
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Please be sure to use proper email format!</p>
                </div>
                <div className="modal-footer">
                </div>
              </div>
            </div>
          </div>
          </div>
        
        )}

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea  className="form-control" id="message" rows="3"  onBlur={(e) => messageValidation(e.target.value)}></textarea>
        </div>

        {messageModal && (
      
      <div id="modal-display" className="modal m-3 p-3">
      <div tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Required Field</h5>
              <button onClick={() => setMessageModal(false)}
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Please enter a message!</p>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
      </div>
    
    )}
      
      
      
      
      
        <button type="button" class="btn btn-info" onClick={submitButton}>
          Submit
        </button>
      </div>
    </>
  );
}
