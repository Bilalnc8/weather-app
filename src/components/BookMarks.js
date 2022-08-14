import React from 'react'

const BookMarks = ({open, bookMarks}) => {
    if (!open) return null

  return (
    <div>
    {bookMarks.map((cities, index) => { 
        return(
        <h1>{cities}</h1>
        )
    
    })}
    </div>
  )
}

export default BookMarks