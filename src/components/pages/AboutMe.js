 import React from 'react';
import './index.css';
import photo from '../../assets/Screenshot 2023-03-28 at 5.44.08 PM.png'
import '../../animation.css'

const style = {
  photo: {
      borderRadius: "10%"
  }
}

export default function AboutMe() {
  
    return (
        <>
      <div className='container text-center about-font pb-1'>
      <div className='d-flex justify-content-center'>
      <h2 className='text-center about-me'><span className='hi'>Hi! </span><span className='abt-me-animation'>I'm Justin Canavan.</span></h2>
      </div>

      <div className='row col-12'>
        {/* <div className='col-12'> */}
        <div className='col-6'>

      <img src={photo} style={style.photo} alt='Justin Canavan headshot' 
      className="photo-anim headshot mt-5 mb-3"></img>
      {/* <hr className='opacity-75 w-75 mx-auto mb-4'></hr> */}
      </div>
    
 
      {/* <div className='col-6'> */}
      <div className='col-6'>
      
      <div className='wrapper'>
      <div className='d-block'>
       <div className='text-center mt-5'><span className='static-text'>
          I am a&nbsp;</span></div> 
          
        <ul className='border-left text-center dynamic-text'>
          <li><span>JavaScript Developer</span></li>
          <li><span>React Developer</span></li>
          {/* <li><span>RESTful API Consumer</span></li> */}
          <li><span>Musician</span></li>
          {/* <li><span>Brother, son, friend!</span></li> */}

        </ul>
        </div>
        </div>
      {/* </div> */}
      </div>
      </div>
      {/* </div> */}
      </div>
  

    
  

      </>
    )
}