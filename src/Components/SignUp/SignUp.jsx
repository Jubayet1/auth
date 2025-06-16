import React, { useState } from 'react'
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = (e) => {
      e.preventDefault();
      // setEmail(e.target.email.value);
      // setPassword(e.target.password.value);
      console.log(email, password)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    }
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