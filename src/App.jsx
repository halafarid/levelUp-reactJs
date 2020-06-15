import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Redirect ,Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Filters from './components/features/filters';

import Navbar from './components/core/navbar'
import Home from './components/core/home'
import About from './components/core/about'
import PageNotFound from './components/core/pageNotFound'
import UserProfile from './components/profile/userProfile'
import Follows from './components/follows'
import CourseDetails from './components/courseDetails';
import Footer from './components/core/footer';
import InstructorProfile from './components/profile/instructorProfile';

const App =props=> {
 
  const [Instructor,setInstructor]=useState([
    {
        id:"1",  
        imgUrl:"",
        name:"George Richards",
        job:"Professional skaters association",
        rating:"5",
        reviews:"3"

    },
      {
          id:"2",
          imgUrl:"../../namrata-parmar.jpg",
          name:"Namrata Parmar",
          job: "Marketing Consultants from India",
          rating:"4",
          reviews:"20"
      },
  
      {
       id:"3",
       imgUrl:"",
       name:"Robert Richards",
       job:"Professional skaters association",
       rating:"3",
       reviews:"12"
      },
      {
        id:"4",
        imgUrl:"",
        name:"Betty Milner",
        job:"Professor of Business Administration",
        rating:"3",
        reviews:"14"

      }

  ])
    return (
      <React.Fragment>
        <Navbar />        
        <Switch>
        <Route path="/home" render={props => (
          <Home
          {...props}
          Instructor={Instructor}
          />
        )}
        />

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
            <Route path="/instructorProfile"
            render={()=>(
              <InstructorProfile/>
            )}
            />
            <Route path="/notfound" component={PageNotFound} />
            <Route path="/follows" component={Follows} />
            <Route path="/courses/details" component={CourseDetails} />
            <Redirect exact from="/" to="/home" />
            <Redirect to="/notfound" />
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }

 
export default App;
