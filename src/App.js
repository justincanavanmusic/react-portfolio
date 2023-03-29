import React from "react";
import './App.css';
import SiteContainer from "./components/SiteContainer";

const styles = {
  
  header: {
       marginTop: "3vh",
       marginBottom: "3vh",
        fontFamily: 'Eczar'
  },
   paragraph: {
       marginLeft: "15vw",
       marginRight: "15vw",
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
