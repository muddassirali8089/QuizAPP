import React from 'react'

function FinishScreen({points , maxPossiblePoints}) {

    const percentage = (points/maxPossiblePoints) * 100
  return (
    <p className='result'>you scroe  <strong>{points}</strong> out of <strong>{maxPossiblePoints} {Math.ceil(percentage)} %</strong></p>
  )
}

export default FinishScreen