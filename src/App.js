import React from "react";
import './App.css';
import SiteContainer from "./components/SiteContainer";

const styles = {
  
  header: {
       marginTop: "5vh",
       marginBottom: "5vh",
        fontFamily: 'Eczar'
  },
   paragraph: {
       marginLeft: "25vw",
       marginRight: "25vw",
       marginTop: "3vh",
       fontFamily: 'Eczar'
      
   },
   font: {
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
