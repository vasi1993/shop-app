import React, { useState } from "react";
import "./User.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import person_icon from "../../assets/person.png";
const User = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="user">
      <div className="user-container">
        <div className="user-header">
          <div className="text">{action} </div>
          <div className="underline"></div>
        </div>
        <div className="user-inputs">
          {action === "Login" ? (
            <></>
          ) : (
            <div className="user-input">
              <img src={person_icon} alt="person" />
              <input type="text" placeholder="Name" required />
            </div>
          )}

          <div className="user-input">
            <img src={email_icon} alt="email" />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="user-input">
            <img src={password_icon} alt="password" />
            <input type="password" placeholder="Password" required />
          </div>
        </div>

        <button>{action === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="user-condition">
          <input type="checkbox" required />
          <p>By continuing, i agreee to the terms of use & privacy policy.</p>
        </div>

        {action === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setAction("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setAction("Login")}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default User;
