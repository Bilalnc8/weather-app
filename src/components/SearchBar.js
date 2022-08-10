import React from 'react'
import { useState } from 'react'

const SearchBar = () => {

  const [searchText, setSearchText] = useState("")
  const [bodypara, setBodyPara] = useState("")

  const SearchBarChange = (event) => {
    setSearchText(event.target.value)
}

  const ChangeBodyPara = (searchText) => {
    setBodyPara(searchText)
  }

  return (
    <div>
    <form>
    <input type="text" value={searchText} onChange={SearchBarChange} placeholder="Enter text"/>
    
    </form>
    <button onClick={ChangeBodyPara}> enter </button>
    </div>
  )
}

export default SearchBar