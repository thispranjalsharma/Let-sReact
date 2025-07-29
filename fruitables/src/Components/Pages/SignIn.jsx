import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EndPoints from "../../apis/EndPoints";
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (state.email && state.password) {
        let response = await axios.post(EndPoints.SIGNIN, state);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="registration-form">
        <div className="form-header">
          {/* <h2>Create Your Account</h2> */}
          <p>Sign up to get started!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              onChange={(event) =>
                setState({ ...state, email: event.target.value })
              }
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              onChange={(event) =>
                setState({ ...state, password: event.target.value })
              }
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit" className="btn btn-custom w-100">
            Sign In
          </button>
        </form>
        <div className="text-muted">
          Create new Account
          <Link to={"/signUp"} className="text-primary">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
