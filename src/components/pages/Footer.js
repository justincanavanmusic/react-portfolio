import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './index.css'


function Footer() {
    return (
       <>
       <div className='container btm-footer footer-background'>
   <div className="fixed-bottom d-flex footer-font-color">
   <div className="card col-6 footer-background">
  <div className="card-body">
    {/* <p className="card-title">Github</p> */}
 
    <a href="https://github.com/justincanavanmusic" target= "_blank" className="card-text"><FontAwesomeIcon className='icon-color' icon={faGithub} size="2xl" /></a>
  </div>
</div>
<div className="card col-6 footer-background">
  <div className="card-body">
    {/* <p className="card-title">LinkedIn</p> */}
    <a href="https://www.linkedin.com/in/justin-canavan510/" target= "_blank" className="card-text"><FontAwesomeIcon className='icon-color' icon={faLinkedin} size="2xl" /></a>
  </div>
</div>

   </div>
   </div>
     
      </>
      
    )
}


export default Footer;