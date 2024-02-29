import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useCallback } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const displayName = `${name} ${lastName}`;
          updateProfile(user, { displayName });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [lastName, name, email, password]
  );
  return (
    <div className="d-flex justify-content-center align-items-center w-100 bg-dark text-white vh-100">
      <form onSubmit={handleSubmit} className="w-50">
        <h2 className="h2 text-bg-dark">create a new account</h2>
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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter your name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter your lastname
          </label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="btn btn-outline-info ms-4" to="/signin">
          Signin
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
