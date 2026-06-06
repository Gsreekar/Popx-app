import { useNavigate } from 'react-router-dom'
import './Welcome.css'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="welcome-page">
      <div className="welcome-graphic"></div>

      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="welcome-actions">
          <button className="btn-primary" onClick={() => navigate('/register')}>
            Create Account
          </button>
          <button className="btn-secondary" onClick={() => navigate('/login')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}