import React, { useState } from 'react';
import { Route, Redirect ,Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Navbar from './components/core/navbar'
import Home from './components/core/home'
import About from './components/core/about'
import PageNotFound from './components/core/pageNotFound'
import UserProfile from './components/profile/userProfile'
import Follows from './components/follows'
import CourseDetails from './components/courses/courseDetails';
import Footer from './components/core/footer';
import InstructorProfile from './components/profile/instructorProfile';
import Payment from './components/features/payment';
import PaymentForm from './components/forms/paymentForm';

const App = props => {
 
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
          job: "Photographer, Travel Bloger",
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
        job:"Teacher",
        rating:"3",
        reviews:"14"

      }
  ]);

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

            <Route path="/courses/:id/details" render={ props => (
              <CourseDetails {...props} />
            )} />
            
            <Route path="/courses/:id/reviews" render={ props => (
              <CourseDetails {...props} />
            )} />

            <Route path="/notfound" component={PageNotFound} />
            <Route path="/follows" component={Follows} />
            <Route path="/shoppingcart" component={Payment} />
            <Route path="/paymentform" component={PaymentForm}/>
             <Route path="/courses/details" component={CourseDetails} />
            <Redirect exact from="/" to="/home" />
            <Redirect to="/notfound" />
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }

 
export default App;
