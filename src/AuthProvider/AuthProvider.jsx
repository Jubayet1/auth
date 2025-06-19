import React, { createContext, useState } from 'react';
import auth from '../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const createUserWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created", user)
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        });
        console.log(email, password)}
const logInUserWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
  });
}
const logOut = () => {
    console.log("signout")
    signOut(auth)
    .then(() => {
}).catch((error) => {
});
}

const AuthProvider = ({ children }) => {
  const [beboharkari, setBeboharkari] = useState(null)
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("state changed/ signed in")
    setBeboharkari(user)
    // ...
  } else {
    // User is signed out
    console.log("state changed/ loged out")
    setBeboharkari(null)
    // ...
  }
});
  const authInfo = {
      createUserWithEmail,
      logInUserWithEmail,
      beboharkari,
      logOut
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