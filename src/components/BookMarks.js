import React from 'react'

const BookMarks = ({open, bookMarks}) => {
    if (!open) return null

  return (
    <div>
    <div className='BookMarks'>
    <i className="ri-menu-line"></i>
    </div>
    {bookMarks.map((cities, index) => { 
        return(
            <li className='BookMarkContents'>    
         {cities}
          </li>
        )
    
    })}
    
    </div>
  )
}

export default BookMarks