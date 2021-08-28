import React from "react";
import Routes from './utilities/Routes'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import dotenv from 'dotenv';

dotenv.config();
function App() {
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
