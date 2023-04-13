import React, { useState } from "react";
import "./index.css";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


export default function Contact() {

  const initialInput = 
    {
      name: "",
      email: "",
      // message: "",
  
    }

  const [userInput, setUserInput] = useState(initialInput);

  const { name, email } = userInput;

  // const [name, setName] = useState("");
  const [nameModal, setNameModal] = useState(false);
  // const [email, setEmail] = useState("");
  const [emailModal, setEmailModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messageModal, setMessageModal] = useState(false);

  const contactInfo = [
  { 
    icon: < AiOutlineMail />,
    contact: 'justincanavanmusic@gmail.com',
    href: "mailto:justincanavanmusic@gmail.com",
  },
   { 
    icon: < BsFillTelephoneFill />,
    contact: '201-218-8720',
    href: "tel:2012188720",
  }
]

const messageForm = [
 { 
  title: 'Name',
  name: 'name',
  value: 'name',
  placeholder: 'John Doe'
},
{ 
  title: 'Email Address',
  name: 'email',
  // onBlur: '',
  value: 'email',
  placeholder: "name@example.com"
}

]

const inputChange = (e) => {
  const { name, email, value } = e.target;
  // console.log(e.target)
  console.log(userInput)
  
  setUserInput(() => {
  // return setName(value) 
  return {
  ...userInput,
  [name]: value,
  [email]: value,
  
  // setUserInput(value)
  }
  })
}


  // const nameChange = (e) => {
  //   const { value, name } = e.target;
  //   console.log(e.target)
    
  //   return setName(value) 
  // }
 
  // const emailChange = (e) => {
  //   const { value } = e.target;
  //   // console.log(name)
    
  //   return setEmail(value) 
  // }

  const messageChange = (e) => {
    const { value } = e.target;
    // console.log(name)
    
    return setMessage(value) 
  }

  const submitButton = (e) => {
  e.preventDefault();
  console.log('hello')

  // setName('');
  // setEmail('');
  // setMessage('');

  
  setUserInput(initialInput)
//   setUserInput(() => {
//   return {
//     ...userInput,
//   [name]: "",
//   [email]: ""
//   }

};

  // const nameValidation = (oneName) => {
  //   if (oneName.length > 0) {
  //     setName(oneName);
  //   } else setNameModal(true);
  // };

  // const validateEmail = (input) => {
  //   const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;

  //   if (input.match(emailRegex)) {
  //     setEmail(input);
  //     console.log(input);
  //   } else {
  //     setEmailModal(true);
  //   }
  // };

  const messageValidation = (message) => {
    if (message.length > 0) {
      // setMessage(message);
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

      <div className="container col-12 text-center mt-5 ">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            {/* <div className="mb-3"> */}
              <h4 className='h4-contact mb-5'>Send me a message!</h4>
            
              <div className='d-flex justify-content-center'>
              <div className='card mb-5 list-items contact-card col-sm-9 col-md-9 col-lg-9'>
                
            {messageForm.map((oneForm) => (
            <div>
              <label htmlFor="exampleFormControlInput1" className="pt-2 pb-2">
                {oneForm.title}
              </label>
              <div className='message-input col-sm-10 col-lg-10 col-md-10'>
              <input
                type="text"
                name={oneForm.name}
                className="form-control"
                placeholder={oneForm.placeholder}
                // defaultValue={name}
                // value={{oneForm.value}}
                onChange={inputChange}
                // onBlur={(e) => nameValidation(e.target.value)}
                required
              ></input>
  
              </div>
              </div>
              ))}
            {/* </div> */}
            {/* <div>
              <label
                id="email"
                htmlFor="exampleFormControlInput1"
                className="pt-2 pb-2 list-items"
              >
                Email address
              </label>
              <div className='message-input col-lg-10 col-md-10 col-sm-10'>
              <input
                type="email"
                name="email"
                className="form-control"
                // defaultValue={email}
                value={email}
                onChange={inputChange}
               
                // onBlur={(e) => validateEmail(e.target.value)}
                id="email"
                placeholder="name@example.com"
              ></input>
              </div>
            </div> */}

            {/* modal */}

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
            {/* <div className='container'></div> */}
            <div>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="pt-2 pb-2 list-items"
              >
                Message
              </label>
              <div className='message-input col-lg-10 col-md-10 col-sm-10'>
              <textarea
               onChange={messageChange}
               value={message}
                className="form-control"
                id="message"
                rows="3"
                // onBlur={(e) => messageValidation(e.target.value)}
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
        <div className='col-lg-6 margin-auto d-flex justify-content-center'>
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









          <div className="margin-auto col-sm-12 col-md-6 col-lg-6">
            <h4 className="mb-4 h4-contact mb-5">Contact</h4>

           
            <div className="card contact-card col-lg-9 col-md-9 col-sm-12">
            {contactInfo.map((oneInfo) => (
            <ul className="list-group">

            <li className="list-items list-group-item">{oneInfo.icon}</li>
              <a
                className="pt-2 pb-2 contact-links"
                href={oneInfo.href}
                target="_blank"
                alt="email"
              >
                {oneInfo.contact}
              </a>
           
            </ul> 
            ))}
               <a
               className="pt-2 pb-2 list-items"
               href="https://github.com/justincanavanmusic"
               target="_blank"
               alt="github"
             >
               <FaGithub className='react-icons'/>
             </a>
          </div>
              
                  
              
           
        </div>
    
        </div>
        </div>


    </>
  );
}
