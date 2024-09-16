import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy check for login (You can integrate this with the backend later)
    if (email === "test@test.com" && password === "password") {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <p>
            By signing in you are agreeing <br />
            our <a href="/terms">Term and privacy policy</a>
          </p>
          <div className="tabs">
            <a href="/login" className="active-tab">Login</a>
            <a href="/register">Register</a>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="fas fa-eye"></i>
            </div>
          </div>
          <div className="actions">
            <label>
              <input type="checkbox" /> Remember password
            </label>
            <a href="/forgot-password">Forget password</a>
          </div>
          <button type="submit" className="login-button">Login</button>
          <p>or connect with</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <div className="biometric">
            <img src="/path-to-fingerprint-icon.png" alt="Fingerprint Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

