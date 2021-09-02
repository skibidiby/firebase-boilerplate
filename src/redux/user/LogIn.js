import React, { useState } from "react";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, providerGoogle, providerEmail } from "../../firebase-config";

import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserEmail,
  selectUserName,
} from "./userSlice";

export const LogIn = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const signInWithGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        dispatch(
          setActiveUser({
            name: result.user.displayName,
            email: result.user.email,
          })
        );
      })
      .catch((e) => console.log(e));
  };

  const signUpWithEmail = () => {
    createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((result) => {
        dispatch(
          setActiveUser({
            // name: result.user.displayName,
            email: result.user.email,
          })
        );
      })
      .catch((e) => console.log(e));
  };

  const logInWithEmail = () => {
    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((result) => {
        dispatch(
          setActiveUser({
            // name: result.user.displayName,
            email: result.user.email,
          })
        );
      })
      .catch((e) => console.log(e));
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => console.log(err));
  };
  const [inputs, setInputValue] = useState({ email: "", password: "" });

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={({ target }) =>
          setInputValue((state) => ({ ...state, email: target.value }))
        }
        value={inputs.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={({ target }) =>
          setInputValue((state) => ({ ...state, password: target.value }))
        }
        value={inputs.password}
      />
      <div>
        {userEmail ? (
          <button onClick={handleSignOut}>Sign OUT</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        )}
        {userEmail ? (
          <button onClick={handleSignOut}>Sign OUT</button>
        ) : (
          <button onClick={signUpWithEmail}>Sign Up with Email</button>
        )}
        <button onClick={logInWithEmail}>LogIn</button>
      </div>
    </div>
  );
};
