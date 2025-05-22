import React from "react";

function Option({ questions, dispatch, answer }) {
  let hasAnswerd = answer !== null;

  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswerd
              ? questions.correctOption === index
                ? "correct"
                : "wrong"
              : ""
          }  `}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswerd}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
