import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CourseDetails from './components/courseDetails';

class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        {/* NavBar */}
        <Container>
          <CourseDetails />
        </Container>
      </React.Fragment>
    );
  }
}
 
export default App;
