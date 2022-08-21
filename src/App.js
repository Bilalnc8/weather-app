import './App.css';
import Background from './components/Background';
import SearchBar from './components/SearchBar';
import 'remixicon/fonts/remixicon.css'
import axios from 'axios';
import { useState, useEffect, useTable } from 'react';
import {AiFillCaretLeft} from "react-icons/ai";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"; 





function App() {
  

  const [images, setImages] = useState([])
  const [final, setFinal] = useState([])
  const url = 'https://image.tmdb.org/t/p/w200'
  const [coverPicture, setCoverPicture] = useState([]) 

  
  

  
axios.get("https://api.themoviedb.org/3/movie/popular?api_key=204359bfca7315f436f5a955973dc3b0&language=en-US&page=1")
      //await(response)
  .then(response => {
    setImages(response.data.results.map(movieImage =>{
      return(movieImage)
  
    }))
    
    
  })
  .catch(err => {
    console.error(err);
  });

const calls = () => {

  const randomNumber = Math.floor(Math.random() * 20);

    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=204359bfca7315f436f5a955973dc3b0&language=en-US&page=1")
        //await(response)
    .then(response => {
      console.log(response.data.results)
      setCoverPicture(response.data.results[randomNumber].backdrop_path)
      
    })
    .catch(err => {
      console.error(err);
    });
  }
  

  const moveRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const moveLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  useEffect(() => {
    calls();
  }, []);

  return (
    <div className="App">

  <img src={`${url}${coverPicture}`} />
  
     
  <MdChevronLeft size={40} onClick={moveLeft} className='leftButton'/> 
  <div  id='slider' className='result'>

  
   
  {images.map((pics, index) => {

      final.push(pics.poster_path) 
  
      return(
        <img  src={`${url}${pics.poster_path}`} />
      )
    
    })}
    </div>

  <MdChevronRight size={40} onClick={moveRight} className='RightButton'/> 
  <div>

  <img  src='https://image.tmdb.org/t/p/w200/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg' />

  </div>
    </div>
  );
}

export default App;
