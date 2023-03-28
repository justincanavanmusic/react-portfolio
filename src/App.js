import React from "react";
import './App.css';
import SiteContainer from "./components/SiteContainer";

const styles = {
  
  nav: {
    fontFamily: 'Eczar'

  },

  header: {
       marginTop: "8vh",
       marginBottom: "6vh",
       fontFamily: 'Eczar'
       
  },
   paragraph: {
       marginLeft: "15vw",
       marginRight: "15vw",
       fontFamily: 'Eczar'
       
   }
}

function App() {
  return (
    <div className="App">
       < SiteContainer styles={styles} />
    </div> 
  );
}

export default App;
