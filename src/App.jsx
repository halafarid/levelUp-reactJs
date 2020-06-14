import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import {Route,Switch,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './components/core/home';

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
        {/* NavBar */}
        <Switch>
        <Container>
        <Route path="/home" render={props => (
          <Home
          {...props}
          Instructor={Instructor}
          />
        )}
        />
        </Container>
        </Switch>
      </React.Fragment>
    );
  }

 
export default App;
