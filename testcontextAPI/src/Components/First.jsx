import React, { createContext, useContext } from "react";
import { FirstContext } from "../App";
import Second from "./Second";
export const AddContect = createContext();

function First() {
  // let message = useContext(FirstContext);

  let { name } = useContext(FirstContext);

  return (
    <div>
      <AddContect value={{ name: "Divya" }}>
        <Second />
      </AddContect>
      First...{name}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem, vero laudantium? Ipsam architecto rem vel laudantium
        vitae dolor suscipit sed officiis necessitatibus aliquam ullam incidunt,
        sit, voluptas labore harum nihil.
      </p>
    </div>
  );
}

export default First;
