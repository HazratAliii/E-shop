import React, { useState, useEffect } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const FirebaseLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          justifyContent: "center",
          margin: "0 auto",
          marginTop: "5%",
        }}
      >
        <label htmlFor="email">Enter Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Enter Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </>
  );
};

export default FirebaseLogIn;
