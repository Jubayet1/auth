import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const Login = () => {
  return (
    <form>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                {/* <div><NavLink className="link link-hover" to={'/login'}>Forgot password?</NavLink></div> */}
                <div><NavLink className="link link-hover" to={'/signup'}>Don't Have Account?</NavLink></div>
                <button className="btn btn-soft btn-primary border-2 border-solid">Log In</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login