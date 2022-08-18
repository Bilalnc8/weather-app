import './App.css';
import Background from './components/Background';
import SearchBar from './components/SearchBar';
import 'remixicon/fonts/remixicon.css'
import axios from 'axios';
import { useState, useEffect, useTable } from 'react';




function App() {
  

  const [images, setImages] = useState([])
  const [final, setFinal] = useState([])

  const axios = require("axios");

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
  return (
    <div className="App">
     
  
    <div className='result'>
  {images.map((pics, index) => {

    final.push(pics.primaryImage.url) 

    return(
      <img  src={pics.primaryImage.url} />
    )
  
  })}
  </div>
  <div>
  {images.map((pics, index) => {

    final.push(pics.primaryImage.url) 

    return(
      <img className='Pictures' src={pics.primaryImage.url} />
    )
  
  })}
  </div>
    </div>
  );
}

export default App;
