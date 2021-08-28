import React, { useRef } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase-config";

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

  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(
        setActiveUser({
          name: result.user.displayName,
          email: result.user.email,
        })
      );
    });
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Signup</h1>
      {userName ? (
        <button onClick={handleSignOut}>Sign OUT</button>
        ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};
