import React from 'react';
import { Row, Col, Button, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaChartLine } from 'react-icons/fa';
import { MdAccessAlarms } from 'react-icons/md';
import { FiBookmark, FiUsers } from 'react-icons/fi';
import {BsFillHeartFill} from "react-icons/bs";
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart, AiOutlineVideoCamera } from 'react-icons/ai';

import CourseReviews from './courseReviews';
import AddReview from './addReview';

const CourseDetails = props => {
    const id = 1;
    const path = props.match.path;

    return ( 
        <React.Fragment>
            <Container>
                <div className="course">
                    <Row>
                        <Col sm={9}>
                            <div className="course__intro">
                                <h1 className="course__heading">Object-Oriented JavaScript-ES6</h1>
                                
                                <div className="course__data">

                                    <div className="course__info">
                                        <img className="course__info-img" src={require('../../images/instructor/photo.jpg')} alt="Instructor"/>
                                        <div className="course__data-info">
                                            <span className="course__data-title">Instructor</span>
                                            <p className="course__data-name course__data-name--lg">Hala Farid</p>
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
                                        <span className="course__feedback-reviews">20 reviews</span>
                                    </div>
                                </div>
                            </div>

                            <Nav fill variant="tabs" className="course__tabs">
                                <Nav.Item>
                                    <Nav.Link href={`/courses/${id}/details`} as={Link} to={`/courses/${id}/details`} className={`course__tabs-link ${path === '/courses/:id/details'? 'active' : ''} `}>Description</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="/test" as={Link} to={`/courses/${id}/reviews`} className={`course__tabs-link ${path === '/courses/:id/reviews'? 'active' : ''} `}>Reviews</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            
                            {
                                path === '/courses/:id/details' ?
                                <div className="course__details">
                                    <div className="course__details-info">
                                        <img className="course__details-img" src={require('../../images/course/name.jpeg')} alt="Course"/>
                                        <p className="course__details-desc">
                                         ES6 is a major upgrade to JavaScript, offering a new syntax for creating objects and working with inheritance. If you want to stay up to date with the JavaScript programming language, you need to watch this course! In this course, Object-oriented Programming in JavaScript - ES6,
                                         you will learn this new syntax and create many different kinds of classes. 
                                         You'll learn all the features of JavaScript classes including working with constructors,
                                         prototypes, inheritance, and simulating public, private, and static members.
                                         Next, you'll create classes for regular business objects, virtual objects which you want to extend, a data service, and user interface components.
                                          Finally, you'll go step by step through the creation of a sample object-oriented web application. When you're finished with this course, you will have a strong understanding of ES6, and how t use classes and modules to develop software using modern programming techniques.
                                        </p>
                                    </div>
    
                                    <div className="course__details-inf">
                                        <h2 className="course__details-title">Main Features</h2>
                                        <ul className="course__details-list">
                                            <li>Classes</li>
                                            <li>Promises</li>
                                            <li>Arrow Functions</li>
                                            <li>Template Literals</li>
                                            <li>Default Parameters</li>
                                            <li>Multi-line Strings</li>
                                            <li>Destructuring Assignment</li>


                                        </ul>
                                    </div>
                                </div>
                                :
                                <div className="course__reviews">
                                    <CourseReviews />
                                    <CourseReviews />
                                    <CourseReviews />

                                    <AddReview />
                                </div>
                            }
                        </Col>
                        <Col sm={3}>
                            <div className="course__features">
                                <div className="course__features-cardlist">
                                    <span className="course__features-icon course__features-cardicon">
                                        <BsFillHeartFill className="wishlist-icon"/>
                                    </span>
                                    Add to wishlist
                                </div>
                                <Button className="btn btn--secondary btn--full btn--upper">Get Course <span className="course__features-pounds">$60</span></Button>

                                <ul className="list--none course__features-list">
                                    <li className="course__features-item">
                                        Enrolled: 15 Students
                                        <span className="course__features-icon"><FiUsers /></span>
                                    </li>
                                    <li className="course__features-item">
                                        Duration: 36 hours
                                        <span className="course__features-icon"><MdAccessAlarms /></span>
                                    </li>
                                    
                                    <li className="course__features-item">
                                        Videos: 50 Viedos
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