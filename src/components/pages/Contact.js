import React from 'react';

const contact = {
    phone: "201-218-8720",
    email: "justincanavanmusic@gmail.com",
    github: "https://github.com/justincanavanmusic"
}

export default function Contact() {
    return (
        <>
        <div class="card">
  <h5 class="card-header">Contact</h5>
  <div class="card-body">
    <h5 class="card-title">Phone</h5>
    <p class="card-text">{contact.phone}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Email</h5>
    <p class="card-text">{contact.email}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}