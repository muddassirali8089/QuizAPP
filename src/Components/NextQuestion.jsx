import React from 'react'

function NextQuestion({dispatch , answer}) {
    if(answer === null) return
  return (
    <div>
<button className='btn btn-ui' onClick={() => dispatch({type:"nextQuestion"})}>Next</button>
    </div>
    
  )
}

export default NextQuestion