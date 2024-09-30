import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(
    localStorage.getItem("signedIn") === "true"
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "password") {
      setSignedIn(true);

      localStorage.setItem("signedIn", "true");

      navigate("/dashboard");
    } else {
      setSignedIn(false);
      localStorage.removeItem("signedIn");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div>
      {signedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button type="submit">Sign In</button>
        </form>
      )}
    </div>
  );
};

export default SignIn;