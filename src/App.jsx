import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        This will look a little bit simple, but I don't like the front-end :)
        </div>

        <div className="bio">
        I am Mikel and thanks to Farza I learned solidity with a bunch of stuff more. Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me ;D
        </button>
      </div>
    </div>
  );
}
