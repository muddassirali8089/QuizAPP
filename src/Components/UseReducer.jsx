import React, { useReducer } from 'react';

const useReducerHook = () => {

  const reducer = (state, action) => {
    const { type  , payload} = action;

    if (type === "increment") {
      return state + payload;
    } else if (type === "decrement") {
      return state - 1;
    } else if (type === "reset") {
      return 0;
    }

    return state;
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>useReducer</p>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "increment"  , payload : 1})}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default useReducerHook;
