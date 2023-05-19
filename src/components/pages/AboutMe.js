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
      <div className='container text-center pb-1'>
      <div className='d-flex justify-content-center'>
      <h2 className='text-center abt-me-animation cream-font about-me'>Hi! I'm Justin Canavan!</h2>
      </div>
      <img src={photo} style={style.photo} alt='Justin Canavan headshot' 
      className="photo-anim headshot mb-3"></img>
      {/* <hr className='opacity-75 w-75 mx-auto mb-4'></hr> */}
      
        <div className='mx-auto mb-5 col-lg-7 col-md-9 col-sm-10 col-11'>
      
      </div>
      </div>
  

      </>
    )
}