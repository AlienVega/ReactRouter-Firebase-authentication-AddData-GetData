import React from "react";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
const ForgotPassword = () => {
  const [email, sendEmail] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        return;
      }
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("we have sent you a reset password email.check your inbox");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email]
  );
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 bg-dark text-white vh-100">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit} className="w-50  mt-3 ">
        <input
          className="form-control my-3"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => sendEmail(e.currentTarget.value)}
        />
        <input
          className="form-control"
          type="submit"
          value="Send reset password email"
        />
        <div className="mb-3 ">
          <Link className="link-success" to="/signin">
            Back To Singin
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
