import React from "react";
import { useReducer } from "react";

const App = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action.type == "add") {
        return { ...state, counter: (state.counter = state.counter + 1) };
      }
      return state;
    },
    {
      counter: 100,
    }
  );
  return (
    <>
      <h1>App Component</h1>
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        Increment : {state.counter}
      </button>
    </>
  );
};

export default App;
