import React, { useState } from "react";
import { useFormik } from 'formik';

const submitButton = (e) => {
  e.preventDefault();
  if ("cool" === "cool") {
    console.log(e.target);
  }
};

export default function Contact({ font }) {
  const [email, setEmail] = useState("");
  console.log(email);

  const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/

  if(email.match(emailRegex)) {
    console.log("this email is valid")
  } else {
    alert('this email is invalid')
  }

  return (
    <>
      <div style={font} class="container text-center col-5 mt-5 ">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="John Doe"
          ></input>
        </div>
        <div class="mb-3">
          <label id="email" for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="name@example.com"
          ></input>
        </div>
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
