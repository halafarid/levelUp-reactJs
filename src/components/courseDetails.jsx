import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';

import { FaChartLine } from 'react-icons/fa';
import { MdAccessAlarms } from 'react-icons/md';
import { FiBookmark, FiUsers } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart, AiOutlineVideoCamera } from 'react-icons/ai';

const CourseDetails = () => {
    return ( 
        <React.Fragment>
            <Container>

                <div className="course">
                    <Row>
                        <Col sm={9}>
                            <div className="course__intro">
                                <h1 className="course__heading">Object-Oriented JavaScript</h1>
                                <div className="course__data">

                                    <div className="course__info">
                                        <img className="course__info-img" src={require('../images/instructor/photo.jpg')} alt="Instructor"/>
                                        <div className="course__data-info">
                                            <span className="course__data-title">Instructor</span>
                                            <p className="course__data-name">Hala Farid</p>
                                        </div>
                                    </div>
                                    
                                    <div className="course__info">
                                        <div className="course__info-icon">
                                            <FiBookmark />
                                        </div>
                                        <div className="course__data-info">
                                            <span className="course__data-title">Category</span>
                                            <p className="course__data-name">IT Technology</p>
                                        </div>
                                    </div>

                                    <div className="course__feedback">
                                        <div>
                                            <span className="course__feedback-stars">
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                            </span>
                                            4.3
                                        </div>
                                        <span className="course__feedback-reviews">8 reviews</span>
                                    </div>
                                </div>
                            </div>

                            tabs

                            <div className="course__details">
                                <div className="course__details-info">
                                    <img className="course__details-img" src={require('../images/course/name.jpeg')} alt="Course"/>
                                    <p className="course__details-desc">
                                        The primary goal of this quick start guide is to introduce you to Unreal Engine 4`s (UE4) development environment. By the end of this guide, you`ll know how to set up and develop C++ Projects in UE4. This guide shows you how to create a new Unreal Engine project, add a new C++ class to it, compile the project, and add an instance of a new class to your level. By the time you reach the end of this guide, you`ll be able to see your programmed Actor floating above a table in the level.
                                        This quick start guide shows you how to add assets to your Unreal Engine (UE4) games. By the end of this guide, you`ll know how to use the Project Browser to create new projects and navigate the Content Browser to find and add content. You`ll also know where to find information on the FBX Content Pipeline while learning how to use the Material Editor to modify Materials before applying them to a Static Mesh Actor.
                                    </p>
                                </div>

                                <div className="course__details-inf">
                                    <h2 className="course__details-title">Main Features</h2>
                                    <ul className="course__details-list">
                                        <li>Achieve Hollywood best quality visuals out of the box.</li>
                                        <li>With complete C++ source code access, you can study.</li>
                                        <li>Comes with designer-friendly Blueprint visual scripting.</li>
                                        <li>With complete C++ source code access, you can study.</li>
                                        <li>Comes with designer-friendly Blueprint visual scripting.</li>
                                        <li>Achieve Hollywood best quality visuals out of the box.</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="course__features">
                                <div className="course__features-cardlist">
                                    <span className="course__features-icon course__features-cardicon">
                                        <AiOutlineShoppingCart />
                                    </span>
                                    Add to Card List
                                </div>
                                <Button className="btn btn--secondary btn--full btn--upper">Get Course <span className="course__features-pounds">$60</span></Button>

                                <ul className="list--none course__features-list">
                                    <li className="course__features-item">
                                        Enrolled: 6 Students
                                        <span className="course__features-icon"><FiUsers /></span>
                                    </li>
                                    <li className="course__features-item">
                                        Duration: 6 hours
                                        <span className="course__features-icon"><MdAccessAlarms /></span>
                                    </li>
                                    
                                    <li className="course__features-item">
                                        Videos: 6 Viedos
                                        <span className="course__features-icon"><AiOutlineVideoCamera /></span>
                                    </li>
                                    
                                    <li className="course__features-item">
                                        Level: Advanced
                                        <span className="course__features-icon"><FaChartLine /></span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    );
}
 
export default CourseDetails;