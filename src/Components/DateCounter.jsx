import { useReducer, } from "react";
const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  console.log(state , action);
  
const {count , step} =state
// const{type , payload} = action;
  switch (action.type) {
    case "inc":
      return { ...state, count: count + step };
      
    case "dec":
      return { ...state, count: count - step };
   
    case "setCount":
      return{...state , count :action.payload}
      
    case "setStep":
      return{...state , step :action.payload}
  
    case "reset":
      return initialState;

      

    default:
      throw new Error("Invalid action");
  }
}

function DateCounter() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  // const {count, step} = initialState;
  
  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    dispatch({ type: "dec", payload: 1 });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const reset = function () {

    dispatch({type:"reset"})
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
