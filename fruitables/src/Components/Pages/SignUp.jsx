import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import EndPoints from "../../apis/EndPoints";

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      let response = await axios.post(EndPoints.CREATE_USER, state);
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Oops! something went wrong!");
    }
    setLoading(false);
  };
  return (
    <>
      <ToastContainer />
      <div className="registration-form">
        <div className="form-header">
          <h2>Create Your Account</h2>
          <p>Sign up to get started!</p>
        </div>
        {isLoading ? (
          <div className="spinner-border spinner-position"></div>
        ) : (
          ""
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              onChange={(event) =>
                setState({ ...state, name: event.target.value })
              }
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
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
            <div className="mb-3">
              <label className="form-label">contact No..</label>
              <input
                onChange={(event) =>
                  setState({ ...state, contact: event.target.value })
                }
                type="number"
                className="form-control"
                id="password"
                placeholder="Entre mobile number"
                required
              />
            </div>
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

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              required
            />
            <label className="form-check-label">
              I agree to the{" "}
              <a href="#" className="text-primary">
                terms and conditions
              </a>
            </label>
          </div>
          <button type="submit" className="btn btn-custom w-100">
            Register
          </button>
        </form>
        <div className="text-muted">
          Already have an account?{" "}
          <Link to={"/signIn"} className="text-primary">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
