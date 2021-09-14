import React from "react";
import Routes from "./utilities/Routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import dotenv from "dotenv";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { useDispatch } from "react-redux";
import { setActiveUser } from "./redux/user/userSlice";

dotenv.config();
function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (result) => {
    if (result) {
      console.log(result);
      dispatch(
        setActiveUser({
          name: result.displayName,
          email: result.email,
        })
      );
    }
  });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
