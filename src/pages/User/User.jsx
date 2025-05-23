import React, { useState } from "react";
import "./User.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import person_icon from "../../assets/person.png";
const User = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <main className="user" aria-label="User authentication section">
      <div className="user-container">
        <div className="user-header">
          <div className="text">{action} </div>
          <div className="underline" aria-hidden="true"></div>
        </div>
        <form className="user-inputs" aria-label={`${action} form`}>
          {action === "Login" ? (
            <></>
          ) : (
            <div className="user-input">
              <img src={person_icon} alt="person" aria-hidden="true" />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
          )}
          <div className="user-input">
            <img src={email_icon} alt="email" aria-hidden="true" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="user-input">
            <img src={password_icon} alt="password" aria-hidden="true" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit">
            {action === "Sign Up" ? "Create account" : "Login"}
          </button>

          <div className="user-condition">
            <input type="checkbox" required />
            <p>By continuing, i agreee to the terms of use & privacy policy.</p>
          </div>
        </form>

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
    </main>
  );
};

export default User;
