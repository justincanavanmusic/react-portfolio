import React from 'react';
import './index.css';
import photo from '../../assets/Screenshot 2023-03-28 at 5.44.08 PM.png'

const style = {
  photo: {
      borderRadius: "10%"
  }
}

export default function AboutMe() {
  
    return (
        <>
      <div className='container pb-1'>

     
      <h2 className='cream-font about-me'>About Me</h2>
      
      <img src={photo} style={style.photo} alt='Justin Canavan headshot' 
      className="headshot mb-3"></img>
      <hr className='opacity-75 w-75 mx-auto mb-4'></hr>
      <div className='container'>
        <div className='mx-auto mb-5 col-lg-7 col-md-9 col-sm-10 col-11'>

      <p className='bio'>A passionate, hard-working, full-stack web developer. Developed a strong foundation in teamwork, problem-solving, and time management over the last decade working in a language-based industry (music). Consistently managed tight deadlines and allocated time efficiently in high pressure situations, while simultaneously delivering a high-quality product. Known as a reliable professional who is always pushing to advance his craft. </p>
      </div>
      </div>
      </div>
  

      </>
    )
}