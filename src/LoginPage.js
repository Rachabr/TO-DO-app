import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For signup only
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // Signup validation
      if (!username || !password || !confirmPassword) {
        setMessage('All fields are required.');
        return;
      }

      if (password !== confirmPassword) {
        setMessage('Passwords do not match.');
        return;
      }

      // Simulate successful signup
      setMessage('Signup successful!');
      onLogin(); // Simulate user login
      navigate('/'); // Redirect to home/dashboard page
    } else {
      // Login validation
      if (username === 'user' && password === 'password') {
        setMessage('Login successful!');
        onLogin(); // Simulate user login
        navigate('/'); // Redirect to home/dashboard page
      } else {
        setMessage('Invalid username or password.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isSignup && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <button type="submit" className="login-button">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{' '}
          <span className="link" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Login' : 'Register'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
