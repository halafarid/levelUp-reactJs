import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        {/* NavBar */}
        <Container>
          <h1>Welcome to our app</h1>
        </Container>
      </React.Fragment>
    );
  }
}
 
export default App;
