import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateAccount.css'

export default function CreateAccount() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: true,
  })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    navigate('/settings')
  }

  const fields = [
    { label: 'Full Name*',      name: 'fullName',  type: 'text',     placeholder: 'Marry Doe' },
    { label: 'Phone number*',   name: 'phone',     type: 'tel',      placeholder: 'Marry Doe' },
    { label: 'Email address*',  name: 'email',     type: 'email',    placeholder: 'Marry Doe' },
    { label: 'Password *',      name: 'password',  type: 'password', placeholder: 'Marry Doe' },
    { label: 'Company name',    name: 'company',   type: 'text',     placeholder: 'Marry Doe' },
  ]

  return (
    <div className="page create-page">
      <h1 className="create-title">
        Create your<br />PopX account
      </h1>

      <div className="create-form">
        {fields.map(f => (
          <div className="field-group" key={f.name}>
            <label>{f.label}</label>
            <input
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              value={form[f.name]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div className="agency-group">
          <p className="agency-label">Are you an Agency?*</p>
          <div className="radio-row">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === true}
                onChange={() => setForm(p => ({ ...p, isAgency: true }))}
              />
              <span className="custom-radio" />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === false}
                onChange={() => setForm(p => ({ ...p, isAgency: false }))}
              />
              <span className="custom-radio" />
              No
            </label>
          </div>
        </div>
      </div>

      <div className="create-footer">
        <button className="btn-primary" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  )
}
