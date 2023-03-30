import React, { useState } from "react";


const submitButton = (e) => {
  e.preventDefault();
  if ("cool" === "cool") {
    console.log(e.target);
  }
};

export default function Contact({ font }) {
  const [email, setEmail] = useState("");
  const [emailModal, setEmailModal] = useState(false);

  const checkEmail = (input) => {
    const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;

    if (input.match(emailRegex)) {
      setEmail(input);
      console.log(input);
    } else {
      setEmailModal(true);
    }
  };
  console.log(emailModal);

  return (
    <>
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
          ></input>
        </div>
        <div className="mb-3">
          <label id="email" for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            defaultValue={email}
            onBlur={(e) => checkEmail(e.target.value)}
            id="email"
            placeholder="name@example.com"
          ></input>
        </div>

        {emailModal && (
          
          <div tabindex="-1">
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
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => setEmailModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="button" class="btn btn-info" onClick={submitButton}>
          Submit
        </button>
      </div>
    </>
  );
}
