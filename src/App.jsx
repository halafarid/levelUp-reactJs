import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CourseCard from './components/cards/courseCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Filters from './components/features/filters';

class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        {/* NavBar */}
        <Container>
          <Filters/>
          {/* <h1>Welcome to our app</h1> */}
       {/* <div className="cardsContainer"> */}
       {/* <CourseCard/> */}
         {/* <CourseCard/>
         <CourseCard/>
         <CourseCard/>
         <CourseCard/>
         <CourseCard/> */}
       {/* </div> */}

        </Container>
      </React.Fragment>
    );
  }
}
 
export default App;
