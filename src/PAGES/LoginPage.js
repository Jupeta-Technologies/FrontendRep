import React from 'react'
import '../components/Loginpage.css'

const LoginPage = () => {
  return (
    <div>
        <body>
            <div className="container">
                <h1>Login</h1>
                <form id="loginForm" action="#">
                <div className="form-control">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter Email" required />
                </div>
                <div className="form-control">
                    <label for="password">Password</label>
                <   input type="password" id="password" placeholder="Enter Password" required />
                </div>
                <button type="submit" className="loginbtn">Login</button>
                </form>
            </div>
        </body>
    </div>
  )
}

export default LoginPage