import React from "react";
import axios from "axios";
import "./styles.css";
import { useEffect } from "react";
import { useState } from "react";
import dice from './images/diceIcon.png'
import design from './images/pauseIcon.png'

function MainPage() {
  const [obj,setobj]=useState({
    advice:"",
    id:"",
    
  });

  useEffect(() => {
    fetchadvice(); // The advice has to be shown when the page is refreshed 
  }, []);
 
     const fetchadvice=()=>{
      axios({
      method: "get",
      url: "https://api.adviceslip.com/advice",
    })
      .then(function (response) {
  
        // console.log(response);
        setobj( {
          advice: response.data.slip.advice, 
          id:response.data.slip.id,
        });
       
      })
      .catch(function (error) {
        console.error("Error occurred:", error);
      });
    }


  return (
    <>
      <div className="advice-container">
        <p className="advice-num">
          Advice #<span>{obj.id}</span>
        </p>
        <p className="advice-text">{obj.advice}</p>
        <img src={design} className="pauseIcon"></img>
        <img src={dice} className="diceIcon" onClick={fetchadvice} ></img>
      </div>
    </>
  );
}

export default MainPage;
