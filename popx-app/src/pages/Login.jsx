import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = () => {
    if (form.email && form.password) {
      navigate('/settings')
    }
  }

  return (
    <div className="page login-page">
      <h1 className="login-title">
        Signin to your<br />PopX account
      </h1>
      <p className="login-subtitle">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <div className="login-form">
        <div className="field-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button
          className={`btn-primary login-btn ${(!form.email || !form.password) ? 'btn-disabled' : ''}`}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  )
}
