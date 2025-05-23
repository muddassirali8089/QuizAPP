import React from "react";

function FinishScreen({ points, maxPossiblePoints  , highScore , dispatch} ) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
   
    <p className="result">
      you scroe <strong>{points}</strong> out of{" "}
      <strong>
        {maxPossiblePoints} {Math.ceil(percentage)} %
      </strong>
    </p>
    <p className="highscore">(High Score {highScore} points)</p>
    <button className="btn btn-ui" onClick={() => dispatch({type: "dataRecived"})}>Restart Quiz</button>
     </>
  );
}

export default FinishScreen;
