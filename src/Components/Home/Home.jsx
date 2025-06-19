import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firebase.init';

const Home = () => {
  const provider = new GoogleAuthProvider();
 
    const stylr = {
        border: "2px solid black"
    };
    const googleSignIn = () => {
      console.log("signing in user");
      signInWithPopup(auth, provider)
      .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(`signing in ${user}`);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log("signing in users failed");
  });
    };
  return (
    <div>
        {/* <button style={stylr} onClick={() => googleSignIn()}>Sign up by Google</button>
        <button style={stylr}>Sign up by Facebook</button>
        <button style={stylr}>Sign up by Microsoft</button> */}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default Home