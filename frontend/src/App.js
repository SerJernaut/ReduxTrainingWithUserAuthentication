import React, {lazy, Suspense, useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute                               from './components/PrivateRoute';
import AccessRoute                                from './components/AccessRoute';
import {REFRESH_TOKEN_KEY} from "./constants";
import {ACTION_TYPE} from "./actions/actionTypes";
import store from "./store";


const SignUpPage = lazy( () => import('./pages/SignUpPage') );
const SignInPage = lazy( () => import('./pages/SignInPage') );
const HomePage = lazy( () => import('./pages/HomePage') );
const DashboardPage = lazy( () => import('./pages/DashboardPage') );
const AdminPage = lazy( () => import('./pages/AdminPage') );

function App () {

    useEffect( () => {
        if (localStorage.getItem(REFRESH_TOKEN_KEY)) {
            store.dispatch({
                type: ACTION_TYPE.AUTH_USER_ACTION,
            });
        }
    }, []);



  return (
      <Router>
        <Suspense fallback={<div className='loader'>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path={['/signup', '/sign_up']} component={SignUpPage}/>
            <Route path={['/signin', '/sign_in', '/login']} component={SignInPage}/>
            <PrivateRoute path={'/dashboard'} component={DashboardPage} to={'/sign_up'}/>
            <AccessRoute permissions={['ADMIN']} to={'/'} path={'/admin'} component={AdminPage}/>
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;
