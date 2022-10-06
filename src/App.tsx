import React from 'react';
import styles from './app.module.scss';
import { CreateAlert, AlertContainer } from "@joeenoch/re-toast"

function App() {

  const handleInfoClick = () =>{
    CreateAlert({
      message:"Info Button Clicked",
      type:"info",
      duration: 2000,
    })
  }
  const handleSuccessClick = () =>{
    CreateAlert({
      message:"success Button Clicked",
      type:"success",
      duration: 1000,

    })
  } 
  const handleErrorClick = () =>{
    CreateAlert({
      message:"Error Button Clicked",
      type:"error",
      duration: 1000,

    })
  }
  const handleWarnClick = () =>{
    CreateAlert({
      message:"Warning Button Clicked",
      type:"warn",
      duration: 1000,

    })
  }
  return (
    <div id={styles.parentContainer}>
      <AlertContainer/>
      <button onClick={handleInfoClick}>
        Click Me For more Info
      </button>
      <button onClick={handleWarnClick}>
        Click Me for warning
      </button>
      <button onClick={handleErrorClick}>
        Click me for error
      </button>
      <button onClick={handleSuccessClick}>
        Click me for more success
      </button>
    </div>
    
  );
}

export default App;
