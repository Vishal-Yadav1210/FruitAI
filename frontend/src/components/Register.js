import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        // Normally, you'll want to send this data to the backend
        console.log("Register with:", { email, password });

        // After successful registration (dummy action here)
        alert("Registration successful!");
        navigate("/login");  // Redirect to the login page after registration
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleRegister}>
                <h2>Register</h2>
                {error && <p className="error-message">{error}</p>}
                
                <input
                    type="email"
                    className="register-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="register-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="register-input"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default Register;
