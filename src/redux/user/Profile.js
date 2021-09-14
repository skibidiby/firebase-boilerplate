import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase-config";

import { useDispatch, useSelector } from "react-redux";
import { setUserLogOutState, selectUserEmail, selectUserName } from "./userSlice";
import "./styles.scss";
export const Profile = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const handleUserUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: inputs.name,
    })
      .then(() => {
        console.log("User updated ", inputs.name);
      })
      .catch((error) => {
        console.error(error);
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
  const [inputs, setInputValue] = useState({ name: "" });

  return (
    <div className="profile centered-screen">
      <div className="content">
        <h1>Profile</h1>
        {/* <p>Name: {userName}</p> */}
        <p>Email: {userEmail}</p>
        <input
          type="name"
          className="input"
          placeholder={"ENTER NEW NAME: "+ userName}
          onChange={({ target }) =>
            setInputValue((state) => ({ ...state, name: target.value }))
          }
          value={inputs.name}
        />
        <div className="row">
          <button className="bttn" onClick={handleUserUpdate}>
            Update
          </button>
          <button className="bttn-red" onClick={handleSignOut}>
            Sign OUT
          </button>
        </div>
      </div>
    </div>
  );
};
