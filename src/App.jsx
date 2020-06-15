import React, { Component } from 'react';
import { Route, Redirect ,Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Navbar from './components/core/navbar'
import Home from './components/core/home'
import About from './components/core/about'
import PageNotFound from './components/core/pageNotFound'
import UserProfile from './components/profile/userProfile'
import Follows from './components/follows'
import CourseDetails from './components/course/courseDetails';

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

            <Route path="/courses/:id/details" render={ props => (
              <CourseDetails {...props} />
            )} />
            <Route path="/courses/:id/reviews" render={ props => (
              <CourseDetails {...props} />
            )} />

            <Redirect exact from="/" to="/home" />
            <Redirect to="/notfound" />
          </Switch>      
        </React.Fragment>
    );
  }
}

export default App;
