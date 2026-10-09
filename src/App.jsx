import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import PatientLogin from './pages/PatientLogin';
import PatientRegister from './pages/PatientRegister';
import DoctorLogin from './pages/DoctorLogin';

function Home() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">🏥 GramCare</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>

        <Link className="nav-button" to="/patient-login">
          Get Started
        </Link>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="tagline">YOUR HEALTH, OUR PRIORITY</span>

            <h2>
              Healthcare for Everyone,
              <span> Everywhere.</span>
            </h2>

            <p>
              GramCare connects patients and doctors through a simple
              digital healthcare platform. Access healthcare services,
              explore health guidance, and stay connected to your care.
            </p>

            <div className="hero-buttons" id="login">
              <Link to="/patient-login">
                <button className="primary-button">Patient Login</button>
              </Link>

              <Link to="/doctor-login">
                <button className="secondary-button">Doctor Login</button>
              </Link>
            </div>

            <div className="highlights">
              <div>
                <strong>Easy Access</strong>
                <p>Simple healthcare access</p>
              </div>

              <div>
                <strong>Patient Focused</strong>
                <p>Designed around your needs</p>
              </div>

              <div>
                <strong>Connected Care</strong>
                <p>Patients and doctors together</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="medical-card">
              <div className="medical-icon">✚</div>
              <h3>Welcome to GramCare</h3>
              <p>Your digital healthcare companion</p>

              <div className="care-item">
                <span>✓</span>
                <div>
                  <strong>Patient Services</strong>
                  <small>Simple and accessible</small>
                </div>
              </div>

              <div className="care-item">
                <span>✓</span>
                <div>
                  <strong>Doctor Access</strong>
                  <small>Connected healthcare</small>
                </div>
              </div>

              <div className="care-item">
                <span>✓</span>
                <div>
                  <strong>Health Guidance</strong>
                  <small>Support for your health journey</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <h2>Healthcare Made Simpler</h2>
          <p>Explore the features planned for GramCare.</p>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon">🧑‍⚕️</div>
              <h3>Doctor Services</h3>
              <p>
                A dedicated interface for doctors to review patient
                information and manage appointments.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">🩺</div>
              <h3>Patient Support</h3>
              <p>
                An accessible interface for patients to enter symptoms
                and explore available healthcare services.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">💚</div>
              <h3>Health Guidance</h3>
              <p>
                A place to display health guidance and recommendations
                when connected to the project's backend.
              </p>
            </article>
          </div>
        </section>

        <section className="about" id="about">
          <h2>Care That Connects Communities</h2>
          <p>
            GramCare aims to make digital healthcare easier to access
            by bringing patients and healthcare professionals together.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 GramCare | Healthcare for Everyone</p>
      </footer>
    </div>

  );
}

function PatientDashboard() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="back-link">← Home</Link>
        <div className="auth-icon">🩺</div>
        <h1>Patient Dashboard</h1>
        <p className="auth-subtitle">
          Welcome to your GramCare patient dashboard.
        </p>
        <p>
          Your symptom form, health recommendations and appointments
          will be added here.
        </p>
        <p className="auth-footer">
          Demonstration only. No medical advice or patient records are
          being retrieved.
        </p>
      </div>
    </div>
  );
}

function DoctorDashboard() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="back-link">← Home</Link>
        <div className="auth-icon">👨‍⚕️</div>
        <h1>Doctor Dashboard</h1>
        <p className="auth-subtitle">
          Welcome to the GramCare doctor dashboard.
        </p>
        <p>
          Patient lists, appointment details and clinical information
          will be added here.
        </p>
        <p className="auth-footer">
          Demonstration only. Doctor authentication and patient records
          are not connected.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;