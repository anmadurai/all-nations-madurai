import React, { useState } from "react";
import "../styles/Login.css";

const users = [
  { username: "admin", password: "12345" },
  { username: "pastor", password: "pastor123" },
  { username: "media", password: "media123" },
  { username: "guest", password: "guest123" }
];

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", user.username);
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div id="loginPage">
      <div className="login-box">
        <h2>All Nations Madurai</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        {error && <div id="error">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
