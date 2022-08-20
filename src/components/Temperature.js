import React from 'react'
import { useState, useEffect, useTable } from 'react';
import axios from 'axios';
import BookMarks from './BookMarks';



const Temperature = ({city, setReady, ready}) => {

    const [temp, setTemp] = useState()
    const [celcius, setCelcius] = useState(true)
    const [units, setUnits] = useState("metric")
    const [maxTemp, setMaxTemp] = useState([])
    const [bookMarks, setBookMarks] = useState([])
    const [openBookMarks, setOpenBookMarks] = useState(false)

    
  

    let apii = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+city+"?unitGroup="+units+"&key=749R9FJ3RFFDYNZ4QM3W54QZJ&contentType=json"

    const numbers = []

    console.log(city)

    // use effect
    useEffect(()=>{
        if (celcius) 
        setUnits("metric");

    if (!celcius)
        setUnits("us");
    
    
    
    console.log(apii)
    
      axios.get(apii)
      //await(response)
  .then(response => {
    setTemp(response.data.currentConditions.temp);
    console.log(response.data.currentConditions.temp)
    
    
  // console.log(response.data.days)

    //setMaxTemp(1)
    //setReady(false)
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
    
    }, [celcius, units, city])
    
    

    const SettingBookMark= () => {
      bookMarks.push(city)
      console.log(bookMarks)
    }

    const BookMarkModel = () => { // create custom hook to add useEffect  
        setOpenBookMarks(!openBookMarks)
        console.log(openBookMarks)
    }
  
       
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
    <button onClick={SettingBookMark}> Add city to bookmarks </button>

 

    {maxTemp.map((maxi, index) => {

      numbers.push(maxi.tempmin + " ")
      return(
        maxi.tempmin
      )
      
      
      return(
        <p key={index}>
        </p>
       )
    })}
    
    <table>

      <thead >
        <tr> Temps</tr>
      </thead>
        <tbody>
          <tr className='tabb'>        
          {maxTemp.map((maxi, index) => {         
            return(
              <td>{maxi.tempmin}</td>    
            )
          })}
          </tr>
          
          
        </tbody>
        </table>

        <button onClick={BookMarkModel}> BookMarks </button>

        <BookMarks open={openBookMarks} bookMarks={bookMarks}/>

    </div>
  )
}


export default Temperature

