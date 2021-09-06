import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home, Wizard, SignIn} from '../screens';
import './styles.scss'

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="menu">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <div className="links row">
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
