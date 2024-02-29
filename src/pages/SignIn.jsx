import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("You have signed in successfully");
      } catch (error) {
        console.error(error);
      }
    },
    [email, password]
  );
  return (
    <div className="d-flex justify-content-center align-items-center w-100 bg-dark text-white vh-100">
      <form className="w-50" onSubmit={handleSubmit}>
        <h2 className="h2 text-bg-dark">Login account</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="mb-3 ">
          <Link className="link-danger" to="/forgotpassword">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="btn btn-outline-info ms-4" to="/signup">
          SignUp
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
