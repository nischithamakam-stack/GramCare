import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PatientRegister() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        password: ''
    });

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleRegister(event) {
        event.preventDefault();

        alert(
            'Registration form completed for demonstration. Account creation requires backend integration.'
        );

        navigate('/patient-dashboard');

    }

    return (
        <div className="auth-page">
            <div className="auth-card register-card">
                <Link to="/" className="back-link">← Back to Home</Link>

                <div className="auth-icon">💚</div>
                <h1>Create Patient Account</h1>
                <p className="auth-subtitle">
                    Join GramCare for accessible healthcare
                </p>

                <form onSubmit={handleRegister}>
                    <label htmlFor="patient-name">Full Name</label>
                    <input
                        id="patient-name"
                        name="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="patient-age">Age</label>
                    <input
                        id="patient-age"
                        name="age"
                        type="number"
                        min="1"
                        max="120"
                        placeholder="Enter your age"
                        value={form.age}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="patient-phone">Phone Number</label>
                    <input
                        id="patient-phone"
                        name="phone"
                        type="tel"
                        pattern="[0-9]{10}"
                        title="Enter a 10-digit phone number"
                        placeholder="10-digit phone number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="register-email">Email Address</label>
                    <input
                        id="register-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="register-password">Create Password</label>
                    <input
                        id="register-password"
                        name="password"
                        type="password"
                        minLength="6"
                        placeholder="At least 6 characters"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                    <button className="auth-submit" type="submit">
                        Register
                    </button>
                </form>

                <p className="auth-footer">
                    Already registered? <Link to="/patient-login">Login</Link>
                </p>
            </div>
        </div>

    );
}

export default PatientRegister;