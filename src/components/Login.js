import React, { useState } from 'react';
import './Form.css';

const Login = ({ switchForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { email, password });
    // Add actual login logic later
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account?{' '}
        <span onClick={() => switchForm('signup')}>Signup here</span>
      </p>
    </div>
  );
};

export default Login;
