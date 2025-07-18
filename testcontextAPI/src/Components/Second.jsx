import React, { useContext } from "react";
import Third from "./Third";
import { AddContect } from "./First";

const Second = () => {
  const { name: Username } = useContext(AddContect);
  console.log(Username);
  return (
    <>
      <h3>First name in seond is {Username}</h3>
      <Third />
    </>
  );
};

export default Second;
