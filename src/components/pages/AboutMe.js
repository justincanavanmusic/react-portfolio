import React from 'react';
import './index.css';
import photo from '../../assets/Screenshot 2023-03-28 at 5.44.08 PM.png'

const style = {
  photo: {
      borderRadius: "10%"
  }
}

export default function AboutMe({ paragraph }) {
  
    return (
        <>
      <div className='container about-me-container justify-content-start'>
        {/* <div className='row'>
          <div className='col'> */}
      <h2 className='about-me'>About Me</h2>
      
      <img src={photo} style={style.photo} alt='Justin Canavan headshot' width='20%' height='25%' className="headshot"></img>

      <p className='bio' >A passionate, hard-working, full-stack web developer. Developed a strong foundation in teamwork, problem-solving, and time management over the last decade working in a language-based industry (music). Consistently managed tight deadlines and allocated time efficiently in high pressure situations, while simultaneously delivering a high-quality product. Known as a reliable professional who is always pushing to advance his craft. </p>
      </div>
      {/* </div>
      </div> */}

      </>
    )
}