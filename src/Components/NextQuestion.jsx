import React from 'react'

function NextQuestion({dispatch , answer}) {
    if(answer === null) return
  return (
    <button className='btn ui' onClick={() => dispatch({type:"nextQuestion"})}>Next</button>
  )
}

export default NextQuestion