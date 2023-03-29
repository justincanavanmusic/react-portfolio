import React from 'react';

const contact = {
    phone: "201-218-8720",
    email: "justincanavanmusic@gmail.com",
    github: "https://github.com/justincanavanmusic"
}



export default function Contact({ font }) {
    return (
        <>
<div style={font} class="container text-center col-5 mt-5 ">

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
{/* </div> */}
</div>
        </>
    )
}