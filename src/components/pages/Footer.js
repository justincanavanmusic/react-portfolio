import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './index.css'


function Footer() {
    return (
       <>
       <div className='container footer-background'>
   <div className="fixed-bottom btm-footer d-flex footer-font-color">
   <div className="card col-4 footer-background">
  <div className="card-body ">
    <p className="card-title">Github</p>
 
    <a href="https://github.com/justincanavanmusic" target= "_blank" className="card-text"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
  </div>
</div>
<div className="card col-4 footer-background">
  <div className="card-body">
    <p className="card-title">LinkedIn</p>
    <a href="https://www.linkedin.com/in/justin-canavan510/" target= "_blank" className="card-text"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
  </div>
</div>
<div className="card col-4 footer-background">
  <div className="card-body">
    <p className="card-title">Stack Overflow</p>
    <a href="https://stackoverflow.com/users/21531500/justincanavan" target= "_blank" className="card-text"><FontAwesomeIcon icon={faStackOverflow} size="2xl" /></a>
  </div>
</div>

   </div>
   </div>
     
      </>
      
    )
}


export default Footer;