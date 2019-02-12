import React, { Component } from 'react';
import Navbar from './Component/Layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import SignIn from './Component/Auth/SignIn';
import SignUp from './Component/Auth/SignUp';
import ErrorPage from './Component/Layout/ErrorPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route component={ErrorPage}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
