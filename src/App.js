import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/HomePage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GetAppointment from './components/GetAppointment/GetAppointment';

import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/get-appointment">
            <GetAppointment></GetAppointment>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
