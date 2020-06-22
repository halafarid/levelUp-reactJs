import React from 'react';
import { Tab, Col, Row, Nav, Container, Button } from 'react-bootstrap'
import { IoMdArrowDropright } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { getCourseById } from '../../services/courseService'


const CourseLessons = () => {
  const [materials, setMaterials] = useState([])
  // const [embedMaterials, setEmbedMaterials] = useState([])
  let [navItemCount, setnavItemCount] = useState(1)
  let [tabCount, setTabCount] = useState(1)
  useEffect(() => {
    // const courseId = props.match.params.id;
    const courseId = "5ef0a3f29fd19d2df401e8ce";
    getCourseById(courseId).then(({ data }) => {
      console.log(data.materials)
     embedVideo(data.materials)
    }).catch((err) => {
      console.log(err)
    })


  }, [])
  const embedVideo = (materials) => {
    const embedMaterials=materials.map(m=> {
      const embed="/embed"
      const position=23;
      const embedLink = [m.link.slice(0, position), embed, m.link.slice(position)].join('');
      console.log(embedLink)
      m.link=embedLink
      return m
    });
console.log(embedMaterials)
    setMaterials(embedMaterials)


  }
  return (
    <React.Fragment>
      {console.log(materials)}
      <div >

        <Container >
          <Tab.Container id="left-tabs-example" defaultActiveKey={`key_${1}`}>
            <Row>

              <Col sm={3} >
                <Nav variant="pills" className="flex-column" id="shadow">
                  {materials.map(material => (
                    <Nav.Item >
                      <Nav.Link className="activeColor" eventKey={`key_${navItemCount++}`}>{material.title}<div className="float"></div> </Nav.Link>

                    </Nav.Item>
                  ))}
                  {/* <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_1">JavaScript History  <div className="float"><FiCheckCircle /></div> </Nav.Link>

                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_2">JavaScript Syntax</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_3">JavaScript Commnets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_4">Variables</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_4">Data Type</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_4">Concatenation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_4">Output</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_4">JavaScript Operators</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_4">Function-Basic</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_4">Arrays</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_4">Loop-Practice</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link className="activeColor" eventKey="key_4">Regular Expression</Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {materials.map(material => (
                    <Tab.Pane eventKey={`key_${tabCount++}`}>
                      <div className="video">
                        <iframe width="100%" height="500" src={material.link} title="video1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </Tab.Pane>

                  ))}
                  {/* <Tab.Pane eventKey="key_2">
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
                  </Tab.Pane> */}
                  <Button variant="outline-info" className="float">Next <IoMdArrowDropright /> </Button>{' '}
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