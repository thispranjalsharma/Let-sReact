import { useContext } from "react";
import { CountextContext } from "../App";

function Third() {
  // const { dataMessage } = useContext(myContext);
  const { counter, setCounter } = useContext(CountextContext);
  return (
    <>
      <h1>Third.... </h1>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter : {counter}
      </button>
    </>
  );
}

export default Third;
