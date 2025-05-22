import { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Loader from "./Components/Loader";
import Error from "./Components/Error.jsx"
import StartScreen from "./Components/StartScreen.jsx";
import Question from "./Components/Question.jsx";

const initialState = {
  questions: [],
  status: "loading",
  index:0,
  answer : null,
  points:0
  // "loading" , "error" , "ready" , "active" , "finished"
};
function reducer(state, action) {
  //action is a function that is comming from the dispatch.
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return{
        ...state,
        status:"active"
      }
      case "newAnswer":
        const question = state.questions[state.index];
        console.log(action.payload + ".....");
        

        return{...state , answer: action.payload , points : action.payload === question.correctOption ? state.points + question.points : state.points}

    default:
      throw new Error("invalid action..");
  }
}



function App() {
  const [{ questions, status , index  , answer , points}, dispatch] = useReducer(reducer, initialState);
  const numQuestion = questions.length;
  useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen numQuestion = {numQuestion} dispatch = {dispatch} />}
      {status === "active" && <Question question = {questions[index]}  dispatch ={dispatch} answer ={answer}/>}
      </Main>
    </div>
  );
}
export default App;
