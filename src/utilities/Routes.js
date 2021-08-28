import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home, Wizard, SignIn} from '../screens';

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="menu">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/Wizard">
          <h2>Wizard</h2>
        </Link>
        <Link to="/SignIn">
          <h2>SignIn</h2>
        </Link>
      </div>
      <div className="screens">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Wizard" component={Wizard} />
            <Route exact path="/SignIn" component={SignIn} />
          </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
