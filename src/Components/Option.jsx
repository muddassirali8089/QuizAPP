import React from 'react'

function Option({options}) {
  return (
     <div className='options'>
      
        
        {options.options.map(option => (
          <button className='btn option' key={option}>{option}</button>
        ))}
      </div>
  )
}

export default Option