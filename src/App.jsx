import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Navbar from './components/core/navbar'
import Home from './components/core/home'
import About from './components/core/about'
import PageNotFound from './components/core/pageNotFound'
import Follows from './components/follows'
import CourseData from './components/forms/courseData';
import CourseDetails from './components/courses/courseDetails';
import CourseLessons from './components/courses/courseLessons';
import Footer from './components/core/footer';
import Profile from './components/profile';
import Payment from './components/features/payment';
import PaymentForm from './components/forms/paymentForm';
import Login from "./components/authentication/login";
import Registration from "./components/authentication/registration";


const App = () => {
  const [Instructor, setInstructor] = useState([
    {
      id: "1",
      imgUrl: "",
      name: "George Richards",
      job: "Professional skaters association",
      rating: "5",
      reviews: "3"
    },
    {
      id: "2",
      imgUrl: "",
      name: "Namrata Parmar",
      job: "Photographer, Travel Bloger",
      rating: "4",
      reviews: "20"
    },

    {
      id: "3",
      imgUrl: "",
      name: "Robert Richards",
      job: "Professional skaters association",
      rating: "3",
      reviews: "12"
    },
    {
      id: "4",
      imgUrl: "",
      name: "Betty Milner",
      job: "Teacher",
      rating: "3",
      reviews: "14"
    }
  ]);

  return (
    <React.Fragment>
      {console.log(window.location.href)}
      {/* { window.location.href !=="http://localhost:3000/login"  && */}
      <Navbar />
      {/* //  } */}
      <Switch>
        <Route
          path="/home"
          render={props => <Home {...props} Instructor={Instructor} />}
        />

        <Route path="/about" render={() => <About />} />

        <Route path="/freeCourses/:id" render={props => (
          <Home
          {...props}
          Instructor={Instructor}
          />
        )}
        />
        <Route path="/paidCourses/:id" render={props => (
          <Home
          {...props}
          Instructor={Instructor}
          />
        )}
        />
        <Route path="/enrolledCourses/:id"render={props => (
            <Home
            {...props}
            Instructor={Instructor}
            />
          )}
          />
        <Route path="/home" render={props => (
          <Home
          {...props}
          Instructor={Instructor}
          />
        )}
        />
        
        <Route path="/profile/:id" render={props=>(
            <Profile
              {...props}
            />
          )}
        />
        <Route path="/profile/edit"  render={props=>
          (<Profile
              {...props}
          />)}
        />

        <Route path="/profile"
          render={props=>(
            <Profile
              {...props}
            />
          )}
        />
        
        <Route
          path="/courses/:id/details"
          render={props => <CourseDetails {...props} />}
        />

        <Route
          path="/courses/:id/reviews"
          render={props => <CourseDetails {...props} />}
        />


        <Route
          path="/courses/:id/edit"
          render={props => <CourseData {...props} />}
        />

        <Route
          path="/courses/add"
          render={props => <CourseData {...props} />}
        />
<<<<<<< HEAD
        
        <Route path="/login" render={ props => (
          <Login {...props} />
        )} />

=======
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
>>>>>>> login
        <Route path="/notfound" component={PageNotFound} />
        <Route 
        path="/follows" 
        render={() => <Follows  Instructor={Instructor}  />}
        />
        <Route path="/shoppingcart" component={Payment} />
        <Route path="/courses/lessons" component={CourseLessons} />
        <Route path="/paymentform" component={PaymentForm} />
        <Redirect exact from="/" to="/home" />
        <Redirect to="/notfound" />
      </Switch>
      
      {window.location.href !=="http://localhost:3000/login" &&
      <Footer />
        }
    </React.Fragment>
  );
};

export default App;
