import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';


function Footer({ font }) {
    return (
       <>
   <div style={font} className="fixed-bottom d-flex">
   <div className="card col-4">
  <div className="card-body">
    <p className="card-title">Github</p>
 
    <a href="https://github.com/justincanavanmusic" target= "_blank" className="card-text"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
  </div>
</div>
<div className="card col-4">
  <div className="card-body">
    <p className="card-title">LinkedIn</p>
    <a href="https://www.linkedin.com/in/justin-canavan-a83b85b3/" target= "_blank" className="card-text"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
  </div>
</div>
<div className="card col-4">
  <div className="card-body">
    <p className="card-title">Stack Overflow</p>
    <a href="https://stackoverflow.com/users/21531500/justincanavan" target= "_blank" className="card-text"><FontAwesomeIcon icon={faStackOverflow} size="2xl" /></a>
  </div>
</div>

   </div>
     
      </>
      
    )
}


export default Footer;