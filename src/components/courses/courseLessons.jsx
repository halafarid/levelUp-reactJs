import React from 'react';
import { Tab, Col, Row, Nav, Container, Button } from 'react-bootstrap'
import { IoMdArrowDropright } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { getCourseById, updateCourse } from '../../services/courseService'


const CourseLessons = () => {
  const [materials, setMaterials] = useState([])
  const [activeMaterial, setActiveMaterial] = useState(1)
  let [count, setCount] = useState(0)
  const [course, setCourse] = useState({})


  useEffect(() => {
    const courseId = "5ef130d49df30152541e8af5";
    getCourseById(courseId).then(({ data }) => {
      setCourse(data)
      console.log(data)
      embedVideo(data.materials)
      data.materials[0].isOpen = true
      setActiveMaterial(data.materials[0]._id)

    }).catch((err) => {
      console.log(err)
    })


  }, [])
  const embedVideo = (materials) => {
    const embedMaterials = materials.map(m => {
      if (!m.link.includes('embed')) {

        const embedLink = `https://www.youtube.com/embed/${m.link.split('v=')[1].split('&')[0]}`
        m.link = embedLink
      }
      return m
    });
    setMaterials(embedMaterials)
  }
  const handleNext = () => {
    if (count + 1 < materials.length && count + 1 > 0) {
      count++;
      setCount(count)
      const active = materials[count]._id
      setActiveMaterial(active)
    }
  }
  const handleEventClick = (e) => {
    const key = e.target.attributes[2].value;
    const index = materials.findIndex(m => m._id === key)
    setCount(index)
    setActiveMaterial(key)
  }
  const handleWatched = (e) => {
    const newCourse = { ...course }
    let index = 0;
    if (e.target.attributes[2]) {
      const key = e.target.attributes[2].value;
      index = materials.findIndex(m => m._id === key)
    }
    else {
      index = count;
    }
    newCourse.materials[index].isOpen = true;
    const courseId = "5ef130d49df30152541e8af5";
    updateCourse(courseId, newCourse).then(({ data }) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })

  }
  return (
    <React.Fragment>
      <div >

        <Container >

          <Tab.Container id="left-tabs-example" activeKey={activeMaterial}>

            <Row>

              <Col sm={3} >
                <Nav variant="pills" className="flex-column" id="shadow">
                  {materials.map(material => (
                    <Nav.Item >
                      {console.log(material.isOpen)}
                      <Nav.Link className="activeColor" onClick={(event) => { handleEventClick(event); handleWatched(event) }} eventKey={material._id}>{material.title}<div className="float">{material.isOpen && <FiCheckCircle />}</div> </Nav.Link>

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
                    <Tab.Pane eventKey={material._id}>
                      <div className="video">
                        <iframe width="100%" height="500" src={material.link} title="video1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </Tab.Pane>

                  ))}

                  <Button onClick={(event) => { handleNext(event); handleWatched(event) }} variant="outline-info" className="float">Next <IoMdArrowDropright /> </Button>{' '}
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