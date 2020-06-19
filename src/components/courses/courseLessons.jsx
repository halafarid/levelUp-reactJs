import React from 'react';
import {Tab,Col,Row,Nav,Container,Button} from 'react-bootstrap'
import { IoMdArrowDropright } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";

const CourseLessons = () => {
    return ( 
        <React.Fragment>
            <div >
                
       <Container >
       <Tab.Container id="left-tabs-example" defaultActiveKey="key_1">
  <Row>
    
    <Col  sm={3} >
      <Nav variant="pills" className="flex-column" id="shadow">
        <Nav.Item >
          <Nav.Link className="activeColor" eventKey="key_1">lesson 1 <div className="float"><FiCheckCircle/></div> </Nav.Link>
         
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="activeColor" eventKey="key_2">lesson 2</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="activeColor" eventKey="key_3">lesson 3</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="activeColor" eventKey="key_4">lesson 4</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="key_1">
          <div className="video">
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/XMZTwgW5oaQ" title="video1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="key_2">
        <div className="video">
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/XMZTwgW5oaQ" title="video2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </Tab.Pane>

        <Tab.Pane eventKey="key_3">
          <div className="video">
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/XMZTwgW5oaQ" title="video3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="key_4">
        <div className="video">
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/XMZTwgW5oaQ" title="video4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
        </Tab.Pane>
        <Button variant="outline-info" className="float">Next <IoMdArrowDropright/> </Button>{' '}
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

       </Container>
            </div>
        </React.Fragment>
     );
}
 
export default CourseLessons;