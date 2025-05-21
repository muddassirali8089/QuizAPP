import { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.data, status: "ready" };
      case "dataFailed":
        return{
          ...state , status: "error"
        }

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
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", data: data }))
      .catch((error) => dispatch({type:"dataFailed"}));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
export default App;
