import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivetRoute from './PrivetRoute';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


function App() {


    return (
      <Router>
          <React.Suspense fallback={loading}>
            <Switch>

            <Route exact path="/login" component={Login} />
            <Route exact path="/register"  component={Register} />
            <Route exact path="/404" component={Page404}/>
            <Route exact path="/500"  component={Page500} />

            <PrivetRoute path="/"  component={TheLayout} />
            </Switch>
          </React.Suspense>
      </Router>
    );
  }


export default App;
