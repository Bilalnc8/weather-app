import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Temperature = () => {

    const [temp, setTemp] = useState()
    const [celcius, setCelcius] = useState(true)
    const [units, setUnits] = useState("metric")
    const [maxTemp, setMaxTemp] = useState([])

    const numbers = []


    // use effect
    useEffect(()=>{
        if (celcius) 
        setUnits("metric");

    if (!celcius)
        setUnits("us");
    
    let apii = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/toronto?unitGroup="+units+"&key=749R9FJ3RFFDYNZ4QM3W54QZJ&contentType=json"
    
    axios.get(apii)
    //await(response)
.then(response => {
  setTemp(response.data.currentConditions.temp);
  
 // console.log(response.data.days)

  //setMaxTemp(1)

  setMaxTemp(response.data.days.map(day => 
    {
      
      return day
      
    }))
    
    
  return(
    {temp}
    

  )
 // console.log(celcius + "respobse")
})
.catch(err => {
  console.error(err);
});
    
    }, [celcius, units])
    
    

    const TempMount = () => {
         <h1> hello </h1>;
    }

    console.log(maxTemp)
       
// send units as a promt when calling func in both buttons
  return (
    <div className="but">
    <h1> {temp} </h1> 
    
    <button onClick={() => {
        
       // setCelcius(!celcius);
        //console.log(celcius+    "switched")
        
        setCelcius(!celcius)
        
        /*(celcius => {
            // props.handle_card_selected(props.id, !prevSelected)
            return !celcius
            console.log(celcius+    "switched")
          })*/
        
    }}> change units</button>
    <button> Click me </button>

 

    {maxTemp.map((maxi, index) => {

      numbers.push(maxi.tempmin + " ")
      
      
      return(
        <p key={index}>
        </p>
       )
    })}

    <div className='grid-container'>
      <div className="grid-item"> {numbers[0]} </div>
      <div className="grid-item"> {numbers[1]} </div>
      <div className="grid-item"> {numbers[2]} </div>
      <div className="grid-item"> {numbers[3]} </div>
      <div className="grid-item"> {numbers[4]} </div>
      <div className="grid-item"> {numbers[5]} </div>
      <div className="grid-item"> {numbers[6]} </div>
      <div className="grid-item"> {numbers[7]} </div>
      <div className="grid-item"> {numbers[8]} </div>
      <div className="grid-item"> {numbers[9]}</div>
      <div className="grid-item"> {numbers[10]}</div>
      <div className="grid-item"> {numbers[11]}</div>
      <div className="grid-item"> {numbers[12]}</div>
      <div className="grid-item"> {numbers[13]}</div>
      <div className="grid-item"> {numbers[14]}</div>
 
    </div>

    
    </div>
  )
}


export default Temperature

// usestate and do  doc.days

/* 
   {maxTemp.map((maxi) => {

      return(
       <p> {maxi.tempmin} </p>
      )
    })}
*/