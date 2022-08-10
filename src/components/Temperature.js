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

   {numbers}
    
   
    {maxTemp.map((maxi, index) => {

      numbers.push(maxi.tempmin)
      
      return(
        <div key={index}>
       <p> {maxi.tempmin} </p>
       <p>{maxTemp[2].tempmax} {maxTemp[3].tempmax}</p>
        </div>
       )
    })}

    
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