import React from "react";
import { useState } from "react";
import { Button } from "../../components/button/Button.styles";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (bindValue, e) => {
    if (bindValue === "email") {
      setEmail(e.target.value);
    } else if (bindValue === "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogIn = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="form" onSubmit={handleLogIn}>
        <div>
          <h1>Sign In</h1>
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={handleChange.bind(this, "email")}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={handleChange.bind(this, "password")}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
        </div>
      </form>
    </div>
  );
};

export default LogIn;
