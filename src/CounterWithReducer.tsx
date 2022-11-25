import React, { useReducer } from "react";

const initialState = {count: 0};

type StateType = { count: number }
type ActionType = { type: "decrement" | "increment" | "reset" }

function reducer(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

export const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: "reset"})}>reset</button>
    </>
  );
}