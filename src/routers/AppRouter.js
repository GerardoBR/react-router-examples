import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  // Route
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// import { MarvelScreen } from '../components/marvel/MarvelScreen';
// import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
    return (
        <Router>
          <div>
          {/* <Navbar/> */}
            <Switch>
              {/* <Route exact path="/login" component = {LoginScreen }/> */}
              <PublicRoute
                exact
                path="/login" 
                component = { LoginScreen }
                isAuthenticated = { user.logged }
              />
              <PrivateRoute  
                path="/" 
                component = { DashboardRouter }
                isAuthenticated = { user.logged }
                />
            </Switch>
          </div>
        </Router>
      );
}
