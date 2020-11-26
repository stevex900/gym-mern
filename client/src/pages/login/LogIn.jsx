import React from "react";
import { useState } from "react";

import { signin } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo, loading, error } = userSignin;
  const dispatch = useDispatch();

  const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
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
      {/* //============================================================ */}
      <Link to="/register">Register </Link>
    </div>
  );
};

export default LogIn;
