import React from 'react';
import './AboutMe.css';
import photo from '../../assets/Screenshot 2023-03-28 at 5.44.08 PM.png'


export default function AboutMe({ paragraph, header, font }) {
    // console.log(props)
    return (
        <>
      <h2 style={header} >About Me</h2>
      <img src={photo} alt='Justin Canavan headshot' width="200" height="250"></img>

      <p style={paragraph}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

      </>
    )
}