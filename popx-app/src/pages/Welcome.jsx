import { useNavigate } from 'react-router-dom'
import './Welcome.css'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="welcome-page">
      <div className="welcome-graphic">
        {/* Decorative floating dots */}
        {[
          { top: '4%',  left: '28%' },
          { top: '8%',  left: '78%' },
          { top: '14%', left: '32%' },
          { top: '16%', left: '56%' },
          { top: '22%', left: '44%' },
          { top: '26%', left: '58%' },
          { top: '32%', left: '68%' },
          { top: '38%', left: '74%' },
          { top: '44%', left: '62%' },
          { top: '52%', left: '44%' },
          { top: '54%', left: '28%' },
          { top: '50%', left: '8%'  },
          { top: '60%', left: '18%' },
        ].map((pos, i) => (
          <span
            key={i}
            className="dot"
            style={{ top: pos.top, left: pos.left }}
          />
        ))}
      </div>

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
