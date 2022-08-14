import React from 'react'
import { useState } from 'react'
import Temperature from './Temperature'

const SearchBar = () => {

  const [searchText, setSearchText] = useState("")
  const [bodypara, setBodyPara] = useState("")
  const [city, setCity] = useState("toronto")
  const [ready, setReady] = useState(false)

  const SearchBarChange = (event) => {
    setSearchText(event.target.value)
}

  const ChangeCity = () => {
    setCity(searchText)
    setReady(true)
    console.log("clicked")
  }
  console.log(searchText)

  return (
    <div className='searchBar'>
    <form>
    <input type="text" value={searchText} onChange={SearchBarChange} placeholder="Enter text"/>
    
    </form>
    <button onClick={ChangeCity}> enter </button>
    <Temperature city={city} setReady={setReady} ready={ready}/>
    </div>
    
  )
}

export default SearchBar