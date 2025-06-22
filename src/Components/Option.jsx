import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Option({ questions, dispatch, answer }) {
  let hasAnswerd = answer !== null;

  const handleAnswer = (index) => {
    dispatch({ type: "newAnswer", payload: index });
    
    // Custom toast style
    const toastStyle = {
      fontSize: "18px", 
      padding: "16px",  
    };

    if (questions.correctOption === index) {
      toast.success("Correct answer! 🎉", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: toastStyle,  // Apply custom style
      });
    } else {
      toast.error("Wrong answer! 😢", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: toastStyle,  // Apply custom style
      });
    }
  };

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
          }`}
          key={option}
          onClick={() => handleAnswer(index)}
          disabled={hasAnswerd}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;