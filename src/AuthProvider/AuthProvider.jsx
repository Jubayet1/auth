import React, { createContext } from 'react';
import auth from '../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

const createUserWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log("User created", user)
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
        });
        console.log(email, password)
    }

const logInUserWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log("user", user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
  });
}

const AuthProvider = ({ children }) => {
  const authInfo = {
    createUserWithEmail,
    logInUserWithEmail
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;