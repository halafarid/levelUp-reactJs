import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/core/navbar'
import Home from './components/core/home'
import About from './components/core/about'
import PageNotFound from './components/core/pageNotFound'
import UserProfile from './components/profile/userProfile'
import Follows from './components/follows'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect ,Switch } from "react-router-dom";
import './App.scss';

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/home" render={()=>(<Home/>)} />
          <Route
            path="/about"
            render={() => (
              <About />
            )}
          />
          <Route
            path="/myProfile"
            render={() => (
              <UserProfile />
            )}
          />
          <Route path="/notfound" component={PageNotFound} />
          <Route path="/follows" component={Follows} />
          <Redirect exact from="/" to="/home" />
          <Redirect to="/notfound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
