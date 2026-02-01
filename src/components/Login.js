import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctUsername = 'admin';
  const correctPassword = '12345';

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div id="loginPage">
      <div className="login-box">
        <h2>All Nations Madurai</h2>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <div id="error">{error}</div>
      </div>
    </div>
  );
};

export default Login;