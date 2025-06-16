import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {createUserWithEmail} = useContext(AuthContext);
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(email, password)
      createUserWithEmail(email, password)
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <div><NavLink className="link link-hover" to={'/login'}>Already Have Account?</NavLink></div>
                <button className="btn btn-soft btn-primary border-2 border-solid">Sign Up</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SignUp