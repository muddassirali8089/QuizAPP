import React from "react";

function NextQuestion({ dispatch, answer, numQuestion, index }) {
  if (answer === null) return;

  if (index < numQuestion - 1) {
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  }
  if (index=== numQuestion-1){
    return(
       <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    )
    
  }
}

export default NextQuestion;
