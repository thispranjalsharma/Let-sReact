import { Navigate } from "react-router-dom";
import SignIn from "../Pages/SignIn";

export const isUserExit = () => {
  return !!sessionStorage.getItem("user");
};

export const getCurrentUser = () => {
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);
  return user;
};

function Auth({ children }) {
  if (isUserExit()) {
    return children;
  }
  return <SignIn />;
}

export default Auth;
