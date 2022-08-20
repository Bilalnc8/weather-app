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
  const url = 'https://image.tmdb.org/t/p/w200'


  console.log("hi")
  console.log("hi")
  console.log("hi")
  console.log("hi")

  
axios.get("https://api.themoviedb.org/3/movie/popular?api_key=204359bfca7315f436f5a955973dc3b0&language=en-US&page=1")
      //await(response)
  .then(response => {
    console.log(response.data)
    setImages(response.data.results.map(movieImage =>{
      return(movieImage)
  
    }))
    
    
  })
  .catch(err => {
    console.error(err);
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

      final.push(pics.poster_path) 
      console.log(pics.poster_path)
      return(
        <img  src={`${url}${pics.poster_path}`} />
      )
    
    })}
    </div>
  <button onClick={moveRight}> right </button>
  <iOutlineArrowLeft size={40} onClick={moveLeft}/> 
  <div>

  <img  src='https://image.tmdb.org/t/p/w200/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg' />

  </div>
    </div>
  );
}

export default App;
