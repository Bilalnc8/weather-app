import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Temperature = () => {

    const [temp, setTemp] = useState()
    let celcius = true
    const [units, setUnits] = useState("metric")


    // use effect
    const unit = () => {
    if (celcius) 
        setUnits("metric");

    if (!celcius)
        setUnits("us");
    }
    const apiCall = () => {
    axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/toronto?unitGroup=metric&key=749R9FJ3RFFDYNZ4QM3W54QZJ&contentType=json")
.then(response => {
  setTemp(response.data.currentConditions.temp);
})
.catch(err => {
  console.error(err);
});}

  return (
    <div className="but">
    <button  onClick={apiCall}> Click me </button>
    <h1>{temp}</h1> <button onClick={() => {
        celcius = !celcius;
        console.log(celcius)
    }}> change units</button>
    </div>
  )
}

export default Temperature