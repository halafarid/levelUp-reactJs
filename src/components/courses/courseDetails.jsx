import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaChartLine } from "react-icons/fa";
import { MdAccessAlarms } from "react-icons/md";
import { FiBookmark } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineVideoCamera,
} from "react-icons/ai";

import CourseReviews from "./courseReviews";
import AddReview from "./addReview";
import * as courseService from "../../services/courseService";
import * as userService from "../../services/userService";

const CourseDetails = (props) => {
  const path = props.match.path;
  const id = props.match.params.id;
  const [courseDetails, setCourse] = useState({});

  useEffect(()=>{
      async function fetchCourseData() {
          const { data } = await courseService.getCourseById(id);
          setCourse(data);   
        }
        fetchCourseData();
  },[]);

  const enrollCourse = async id => {
    await userService.enrollCourse(id);
  }

  return (
    <React.Fragment>
      <Container>
        <div className="course">
          <Row>
            <Col sm={9}>
              <div className="course__intro">
                <h1 className="course__heading">{courseDetails?.title}</h1>

                <div className="course__data">
                  <div className="course__info">
                    <img
                      className="course__info-img"
                      src={require("../../images/instructor/photo.jpg")}
                      alt="Instructor"
                    />
                    <div className="course__data-info">
                      <span className="course__data-title">Instructor</span>
                      <p className="course__data-name course__data-name--lg">
                        {courseDetails.instructorId?.fullName}
                        
                      </p>
                    </div>
                  </div>

                  <div className="course__info">
                    <div className="course__info-icon">
                      <FiBookmark />
                    </div>
                    <div className="course__data-info">
                      <span className="course__data-title">Category</span>
                      <p className="course__data-name">
                        {courseDetails.categoryId?.title}
                      </p>
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
                    <span className="course__feedback-reviews">
                      {courseDetails.reviews?.length} reviews
                    </span>
                  </div>
                </div>
              </div>

              <Nav fill variant="tabs" className="course__tabs">
                <Nav.Item>
                  <Nav.Link
                    href={`/courses/${id}/details`}
                    as={Link}
                    to={`/courses/${id}/details`}
                    className={`course__tabs-link ${
                      path === "/courses/:id/details" ? "active" : ""
                    } `}
                  >
                    Description
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="/test"
                    as={Link}
                    to={`/courses/${id}/reviews`}
                    className={`course__tabs-link ${
                      path === "/courses/:id/reviews" ? "active" : ""
                    } `}
                  >
                    Reviews
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {path === "/courses/:id/details" ? (
                <div className="course__details">
                  <div className="course__details-info">
                    <img
                      className="course__details-img"
                      src={require("../../images/course/name.jpeg")}
                      alt="Course"
                    />
                    <p className="course__details-desc">
                      {courseDetails.description}
                    </p>
                  </div>

                  <div className="course__details-inf">
                    <h2 className="course__details-title">Main Features</h2>
                    <ul className="course__details-list">
                      {courseDetails.features?.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="course__reviews">
                  {courseDetails.reviews?.map((review) => (
                    <CourseReviews key={review.userId} reviewData={review} />
                  ))}

                  <AddReview />
                </div>
              )}
            </Col>
            <Col sm={3}>
              <div className="course__features">
                <div className="course__features-cardlist">
                  <span className="course__features-icon course__features-cardicon">
                    <BsFillHeartFill className="wishlist-icon" />
                  </span>
                  Add to wishlist
                </div>
                {
                  courseDetails.payment===0?
                   <Link className="btn btn--secondary btn--full btn--upper" to={`/courses/${id}/lessons`} onClick={() => enrollCourse(id)}>
                  Go to Course
                  </Link> :
                  <Link className="btn btn--secondary btn--full btn--upper" to={`/courses/${id}/paymentform`}>
                  Buy Course
                    <span className="course__features-pounds"> &nbsp; ${courseDetails.payment}</span>
                  </Link>
                }
                

                <ul className="list--none course__features-list">
                  <li className="course__features-item">
                    Duration: {courseDetails.duration} hours
                    <span className="course__features-icon">
                      <MdAccessAlarms />
                    </span>
                  </li>

                  <li className="course__features-item">
                    Videos: {courseDetails.materials?.length} Viedos
                    <span className="course__features-icon">
                      <AiOutlineVideoCamera />
                    </span>
                  </li>

                  <li className="course__features-item">
                    Level: {courseDetails.levelId?.title}
                    <span className="course__features-icon">
                      <FaChartLine />
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CourseDetails;
