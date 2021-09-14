import React from "react";
import "./styles.css";
import { LogIn } from "../../redux/user/LogIn";
import { Profile } from "../../redux/user/Profile";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../../redux/user/userSlice";

export default function SignIn() {
  const userEmail = useSelector(selectUserEmail);

  return (
    <>
      {userEmail ? <Profile /> : <LogIn />}
    </>
  );
}
