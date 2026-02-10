import React from 'react'
import './App.css'

export default function App() {
  const IMGURL = import.meta.env.BASE_URL
  const [isLoginView, setIsLoginView] = React.useState(true)
  const [pwdType, setPwdType] = React.useState('password')
  const [signupPwdType, setSignupPwdType] = React.useState('password')
  const [signupData, setSignupData] = React.useState({ fullName: '', email: '', password: '', phone: '' })
  const year = new Date().getFullYear()

  function switchView() {
    setIsLoginView(!isLoginView)
  }

  function togglePwd() {
    setPwdType(prev => (prev === 'password' ? 'text' : 'password'))
  }

  function toggleSignupPwd() {
    setSignupPwdType(prev => (prev === 'password' ? 'text' : 'password'))
  }

  function handleSignupChange(e) {
    const { name, value } = e.target
    setSignupData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="app">
      <div className="outer-box">
        <div className="inner-box">

          {isLoginView && (
            <div className="login-container">
              <h2>Sign in with email</h2>

              <div className="input-group">
                <img
                  className="left-icon"
                  src={IMGURL + 'message.jpg'}
                  alt=""
                />
                <input type="text" placeholder="Enter email" />
              </div>

              <div className="input-group">
                 <img 
                  className="left-icon"
                  src={IMGURL + 'pass.jpg'} alt="" />
                <input type={pwdType} placeholder="Enter password" />
                 <img
                  className="right-icon"
                  src={IMGURL + 'show.jpg'}
                  alt="Toggle password visibility"
                  onClick={togglePwd}
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') togglePwd() }}
                />
              </div>

              <p>
                Don&apos;t have an account? Grab this ➪{' '}
                <label onClick={switchView}>Sign up</label>
              </p>
            </div>
          )}

          {!isLoginView && (
            <div className="login-container">
              <h2>Sign up with email</h2>

              <div className="input-group">
                <img
                  className="left-icon"
                  src={IMGURL + 'pp.jpg'}
                  alt=""
                />
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Enter full name" 
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                />
              </div>

              <div className="input-group">
                <img
                  className="left-icon"
                  src={IMGURL + 'message.jpg'}
                  alt=""
                />
                <input 
                  type="text" 
                  name="email"
                  placeholder="Enter email" 
                  value={signupData.email}
                  onChange={handleSignupChange}
                />
              </div>

              <div className="input-group">
                 <img 
                  className="left-icon"
                  src={IMGURL + 'pass.jpg'} alt="" />
                <input 
                  type={signupPwdType} 
                  name="password"
                  placeholder="Enter password" 
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
                 <img
                  className="right-icon"
                  src={IMGURL + 'show.jpg'}
                  alt="Toggle password visibility"
                  onClick={toggleSignupPwd}
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSignupPwd() }}
                />
              </div>

              <div className="input-group">
                 <img 
                  className="left-icon"
                  src={IMGURL + 'call.jpg'} alt="" />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Enter phone number" 
                  value={signupData.phone}
                  onChange={handleSignupChange}
                />
              </div>

              <p>
                Already have an account? Grab this ➪{' '}
                <label onClick={switchView}>Sign in</label>
              </p>
            </div>
          )}

        </div>
      </div>

      <footer className="app-footer">
        <p>© {year} Umrikar Sushil Amit — ID: 2500030941</p>
      </footer>

    </div>
  )
}