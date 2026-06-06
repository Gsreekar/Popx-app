import './AccountSettings.css'

export default function AccountSettings() {
  return (
    <div className="page settings-page">
      <h2 className="settings-title">Account Settings</h2>

      <div className="settings-card">
        <div className="profile-row">
          <div className="avatar-wrap">
            <img
              src="https://i.pravatar.cc/80?img=47"
              alt="Profile"
              className="avatar-img"
            />
            <button className="camera-btn" aria-label="Change photo">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </button>
          </div>

          <div className="profile-info">
            <p className="profile-name">Marry Doe</p>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}
