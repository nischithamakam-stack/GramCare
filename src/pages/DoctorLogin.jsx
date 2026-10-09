import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DoctorLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(event) {
        event.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert('Please enter your email and password.');
            return;
        }

        alert('Demo login successful! Real doctor authentication is not connected yet.');
        navigate('/doctor-dashboard');

    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <Link to="/" className="back-link">← Back to Home</Link>

                <div className="auth-icon">👨‍⚕️</div>
                <h1>Doctor Login</h1>
                <p className="auth-subtitle">
                    Access your GramCare doctor dashboard
                </p>

                <form onSubmit={handleLogin}>
                    <label htmlFor="doctor-email">Doctor Email</label>
                    <input
                        id="doctor-email"
                        type="email"
                        placeholder="Enter your registered email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <label htmlFor="doctor-password">Password</label>
                    <input
                        id="doctor-password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />

                    <button className="auth-submit" type="submit">
                        Login as Doctor
                    </button>
                </form>

                <p className="auth-footer">
                    Demo interface only. Doctor accounts require backend authentication.
                </p>
            </div>
        </div>

    );
}

export default DoctorLogin;