import { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Loader from "./Components/Loader";
import Error from "./Components/Error.jsx"
import StartScreen from "./Components/StartScreen.jsx";

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.data, status: "ready" };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("invalid action..");
  }
}

const initialState = {
  questions: [],
  status: "loading",
  // "loading" , "error" , "ready" , "active" , "finished"
};

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  const numQuestion = questions.length;
  useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", data: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen numQuestion = {numQuestion} />}
      </Main>
    </div>
  );
}
export default App;
