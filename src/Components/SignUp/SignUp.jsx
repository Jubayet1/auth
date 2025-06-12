import React, { useState } from 'react'
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

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
    <div>
      <form onSubmit={handleSignUp}>
        <input type="text" name="email" id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <input type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}

export default SignUp