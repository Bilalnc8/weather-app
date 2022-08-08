import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Temperature = () => {

    const [temp, setTemp] = useState()
    const [celcius, setCelcius] = useState(true)
    const [units, setUnits] = useState("metric")


    // use effect
    useEffect(()=>{
        if (celcius) 
        setUnits("metric");

    if (!celcius)
        setUnits("us");
    console.log(units)
    let apii = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/toronto?unitGroup="+units+"&key=749R9FJ3RFFDYNZ4QM3W54QZJ&contentType=json"
    
    axios.get(apii)
    //await(response)
.then(response => {
  setTemp(response.data.currentConditions.temp);
  return(
    {temp}
  )
 // console.log(celcius + "respobse")
})
.catch(err => {
  console.error(err);
});
    console.log('1')
    }, [celcius, units])
    
    

    const TempMount = () => {
         <h1> hello </h1>;
    }
       
// send units as a promt when calling func in both buttons
  return (
    <div className="but">
    <h1> {temp}</h1> 
    <button onClick={() => {
        console.log(celcius+"   clicked")
       // setCelcius(!celcius);
        //console.log(celcius+    "switched")
        
        setCelcius(!celcius)
        
        /*(celcius => {
            // props.handle_card_selected(props.id, !prevSelected)
            return !celcius
            console.log(celcius+    "switched")
          })*/
          
          console.log(celcius+"   func called")
        
    }}> change units</button>
    <button> Click me </button>
    
    </div>
  )
}


export default Temperature