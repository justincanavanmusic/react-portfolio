 import React, { useRef, useEffect } from 'react';
import './index.css';
import photo from '../../assets/Screenshot 2023-03-28 at 5.44.08 PM.png'
import '../../animation.css'

const style = {
  photo: {
      borderRadius: "10%"
  }
}

export default function AboutMe() {
  const word1 = useRef(null)
  const word2 = useRef(null)
  const word3 = useRef(null)
  const word4 = useRef(null)

useEffect(() => {
  let word1Length=word1.current.textContent.length;
  let word2Length=word2.current.textContent.length;
  let word3Length=word3.current.textContent.length;
  let word4Length=word3.current.textContent.length;

  console.log(word1Length)
  console.log(word2Length)
  console.log(word3Length)
  console.log(word4Length)

}, [word1, word2, word3])
  
    return (
        <>
      <div className='container text-center about-font pb-1'>
      <div className='d-flex justify-content-center'>
      <h2 className='text-center about-me'><span className='hi'>Hi! </span><span className='abt-me-animation'>I'm Justin Canavan.</span></h2>
      </div>

      <div className='row col-12'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6'>

      <img src={photo} style={style.photo} alt='Justin Canavan headshot' 
      className="photo-anim photo-margin headshot mb-3"></img>

      </div>

      <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
      
      <div className='wrapper'>
      <div className='d-block'>
       <div className='text-center i-am-margin'><span className='static-text'>I am a</span></div> 
          
        <ul className='border-left text-center dynamic-text'>
          <li className='word1'><span ref={word1} className='dynamic-text word-1'>JavaScript Developer</span></li>
          <li className='word2'><span ref={word2}  className='dynamic-text word-2'>React Developer</span></li>
          <li className='word3'><span ref={word3}  className='dynamic-text word-3'>Musician</span></li>
          <li className='word4'><span ref={word4}  className='dynamic-text word-4'>Software Engineer</span></li>

        </ul>
        </div>
        </div>

      </div>
      </div>
      </div>
  

    
  

      </>
    )
}