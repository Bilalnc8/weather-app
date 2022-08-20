import './App.css';
import Background from './components/Background';
import SearchBar from './components/SearchBar';
import 'remixicon/fonts/remixicon.css'
import axios from 'axios';
import { useState, useEffect, useTable } from 'react';
import {AiFillCaretLeft} from "react-icons/ai";
import {MdChevronLeft} from "react-icons/md"; 





function App() {
  

  const [images, setImages] = useState([])
  const [final, setFinal] = useState([])

  const axios = require("axios");

  console.log("hi")
  console.log("hi")
  console.log("hi")
  console.log("hi")

  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {limit: '5', page: '1', titleType: 'movie', year: '2018'},
    headers: {
      'X-RapidAPI-Key': 'fbf71dc3b0msh7613c82de9c9067p1c24a9jsn5b47ee5b5374',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

axios.request(options).then(function (response) {
  setImages(response.data.results.map(movieImage =>{
    return(movieImage)

  }))
	
 


}).catch(function (error) {
	console.error(error);
});

  const moveRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const moveLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }


  return (
    <div className="App">
     
  <MdChevronLeft size={40} onClick={moveLeft} className='icons'/> 
  <div  id='slider' className='result'>
    {images.map((pics, index) => {

      final.push(pics.primaryImage.url) 

      return(
        <img  src={pics.primaryImage.url} />
      )
    
    })}
    </div>
  <button onClick={moveRight}> right </button>
  <iOutlineArrowLeft size={40} onClick={moveLeft}/> 
  <div>

  </div>
    </div>
  );
}

export default App;
