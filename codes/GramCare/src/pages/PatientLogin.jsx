import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PatientLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(event) {
        event.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert('Please enter your email and password.');
            return;
        }

        alert('Demo login successful! Backend authentication is not connected yet.');
        navigate('/patient-dashboard');

    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <Link to="/" className="back-link">← Back to Home</Link>

                <div className="auth-icon">🩺</div>
                <h1>Patient Login</h1>
                <p className="auth-subtitle">
                    Welcome back to GramCare
                </p>

                <form onSubmit={handleLogin}>
                    <label htmlFor="patient-email">Email Address</label>
                    <input
                        id="patient-email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <label htmlFor="patient-password">Password</label>
                    <input
                        id="patient-password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />

                    <button className="auth-submit" type="submit">
                        Login as Patient
                    </button>
                </form>

                <p className="auth-footer">
                    New to GramCare? <Link to="/patient-register">Create an account</Link>
                </p>
            </div>
        </div>

    );
}

export default PatientLogin;