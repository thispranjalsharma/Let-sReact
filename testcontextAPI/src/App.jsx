import React, { createContext, useState } from "react";
import First from "./Components/First";

export const FirstContext = createContext();
export const CountextContext = createContext();

function App() {
  let message = "let try";
  let myObj = { name: "test" };
  const [counter, setCounter] = useState(null);

  return (
    <>
      <FirstContext value={myObj}>
        <h1>Appp...</h1>
        <CountextContext value={{ counter, setCounter }}>
          <First />
        </CountextContext>
      </FirstContext>
    </>
  );
}

export default App;
