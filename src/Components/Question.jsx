import React from 'react'
import Option from './Option';

function Question({question , answer , dispatch}) {
  console.log(question);
  
  return (
    <div>
      <h4>{question.question}</h4>
      <Option questions={question} dispatch={dispatch} answer = {answer}/>
    </div>
  )
}

export default Question