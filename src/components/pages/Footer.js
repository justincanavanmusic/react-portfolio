import React from 'react';

function Footer({ font }) {
    return (
       <>
   <div style={font} class="fixed-bottom d-flex">
   <div className="card col-4">
  <div className="card-body">
    <p className="card-title">Github</p>
    <a href="https://github.com/justincanavanmusic" target= "_blank" class="card-text">Check out my Github!</a>
  </div>
</div>
<div className="card col-4">
  <div className="card-body">
    <p className="card-title">LinkedIn</p>
    <a href="https://www.linkedin.com/in/justin-canavan-a83b85b3/" target= "_blank" className="card-text">Check out my LinkedIn!</a>
  </div>
</div>
<div className="card col-4">
  <div className="card-body">
    <p className="card-title">Github</p>
    <a href="https://github.com/justincanavanmusic" target= "_blank" className="card-text">Check out my Github!</a>
  </div>
</div>

   </div>
     
      </>
      
    )
}


export default Footer;