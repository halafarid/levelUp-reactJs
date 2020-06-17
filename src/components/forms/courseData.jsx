import React from 'react';
import { Row, Col, Button, Container, Form, Dropdown } from 'react-bootstrap';

import { FaChartLine } from 'react-icons/fa';
import { MdAccessAlarms } from 'react-icons/md';
import { FiBookmark } from 'react-icons/fi';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { RiUploadLine } from 'react-icons/ri';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const CourseData = () => {

    return ( 
        <React.Fragment>
            <Container>
                <div className="course">
                    <Row>
                        <Col sm={9}>
                            <div className="course__intro">
                                <Form.Control className="course__control course__control--text" type="text" placeholder="Course Title" />
                                
                                <div className="course__data course__add">

                                    <div className="course__info course__info-add">
                                        <img className="course__info-img" src={require('../../images/instructor/photo.jpg')} alt="Instructor"/>
                                        <div className="course__data-info">
                                            <span className="course__data-title">Instructor</span>
                                            <p className="course__data-name course__data-name--lg">Hala Farid</p>
                                        </div>
                                    </div>
                                    
                                    <div className="course__info course__info-add">
                                        <div className="course__info-icon">
                                            <FiBookmark />
                                        </div>
                                        <div className="course__data-info">
                                            <span className="course__data-title">Category</span>
                                            <Dropdown>
                                                <Dropdown.Toggle className="course__control course__control--dropdown" id="dropdown-basic">
                                                    Choose Category
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="course__details">
                                <div className="course__details-info">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <div className="course__control course__control--file">
                                            <div className="course__control--file-icon">
                                                <RiUploadLine />
                                            </div>
                                            <Form.File id="exampleFormControlFile1" label="Upload course image" />
                                        </div>
                                        <Form.Control className="course__control course__control--text" as="textarea" rows="8" placeholder="Course Description"/>
                                    </Form.Group>
                                </div>

                                <div className="course__details-inf">
                                    <h2 className="course__details-title">Main Features</h2>
                                    <Form.Control className="course__control course__control--text course__control--text--w" type="text" placeholder="Enter Feature" />
                                    <span className="course__add-icon">
                                        <BsFillPlusCircleFill />
                                    </span>
                                    <ul className="course__details-list course__add-list">
                                        <li>Show when press + icon</li>
                                        <li>Show when press + icon</li>
                                        <li>Show when press + icon</li>
                                        <li>Show when press + icon</li>
                                    </ul>
                                </div>

                                <div className="course__details-inf">
                                    <h2 className="course__details-title course__add-title">Course Material</h2>
                                    <Row>
                                        <Col>
                                            <Form.Control className="course__control course__control--text" type="text" placeholder="Lesson Link" />
                                        </Col>
                                        <Col>
                                            <Form.Control className="course__control course__control--text" type="text" placeholder="Lesson Title" />
                                        </Col>
                                        <span className="course__add-icon">
                                            <BsFillPlusCircleFill />
                                        </span>
                                    </Row>
                                    <ul className="course__details-list course__add-list">
                                        <li>Show when press + icon</li>
                                        <li>Show when press + icon</li>
                                        <li>Show when press + icon</li>
                                        <li>Show when press + icon</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="course__features">
                                <div className="middle">
                                    <label>
                                        <input type="radio" name="radio" checked readOnly/>
                                        <div className="box">
                                            <span>For free</span>
                                        </div>
                                    </label>

                                    <label>
                                        <input type="radio" name="radio"/>
                                        <div className="box">
                                            <span>Payment</span>
                                        </div>
                                        <input className="course__control course__control-price course__num course__num--ml" type="number" placeholder="Enter Price"/>
                                    </label>
                                </div>
                                <ul className="list--none course__features-list">
                                    <li className="course__features-item">
                                        Duration: <input className="course__num course__control" type="number"/>
                                        <span className="course__features-icon"><MdAccessAlarms /></span>
                                    </li>
                                    
                                    <li className="course__features-item">
                                        Videos: <input className="course__num course__control" type="number"/>
                                        <span className="course__features-icon"><AiOutlineVideoCamera /></span>
                                    </li>
                                    
                                    <li className="course__features-item">
                                        Level: 
                                        <Dropdown>
                                            <Dropdown.Toggle className="course__control course__control--dropdown" id="dropdown-basic">Choose Level</Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Basics</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Advanced</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <span className="course__features-icon"><FaChartLine /></span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Button className="btn btn--primary-dark btn--mt0 btn--upper">Submit Course</Button>
                </div>
            </Container>
        </React.Fragment>
    );
}
 
export default CourseData;