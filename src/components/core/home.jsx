import React from "react";
import BackGround from "./backGround";
import InstructorCard from "../cards/instructorCard";
import React from 'react';

import CourseCard from "../cards/courseCard";
import Filters from "../features/filters";
import About from "../core/about";
import { Link } from "react-router-dom";
import { Container,Nav } from 'react-bootstrap';


import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const Home = props => {
    const id=1;
    const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const path = props.match.path;

    return (
        <React.Fragment>
            <BackGround />

            <About />
            <Container className="InstructorContainer">
                <div className="instructor">
                    <h2 className="instructor__Inst-title">Top Rating Instructors</h2>
                    <a href="" className="instructor__Inst-title instructor__Inst-title--secondary">View all <AiOutlineArrowRight /></a>
                </div>
                <div className="InstCard">
                    {props.Instructor.map(instructor => (
                        <InstructorCard
                            key={instructor.id}
                            Instructor={instructor}
                        />
                    ))
                    }
                </div>
            </Container>
            <div className="FixedSection">
                <div className="FixedSection__bg"></div>
                <div className="row">
                    <div className="col-md-6 FixedSection__info">
                        <h2 className="FixedSection__text"> Ceteros fuisset mei no, soleat epicurei adipiscing ne vis.</h2>
                        <p className="FixedSection__text">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                        <a className="FixedSection__btn">Get Started!</a>
                    </div>
                </div>
            </div>
            <Container>
            <Nav fill variant="tabs" className="course__tabs">
                <Nav.Item>
                    <Nav.Link href={`/freeCourses/${id}`} as={Link} to={`/freeCourses/${id}`} className={`course__tabs-link ${path === `/freeCourses/${id}` ? 'active' : ''} `}>Free Courses</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/paidCourses/${id}`} as={Link} to={`/paidCourses/${id}`} className={`course__tabs-link ${path === `/paidCourses/${id}` ? 'active' : ''} `}>Paid Courses</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/enrolledCourses/${id}`} as={Link} to={`/enrolledCourses/${id}`} className={`course__tabs-link ${path === `/enrolledCourses/${id}` ? 'active' : ''} `}>Enrolled Courses</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="courseCardsContainer">
                <Filters />
                <div className="courseCardsContainer__sub">
                    {courses.map((course) => (
                        <div className="CourseCard">
                            <CourseCard
                                path={path}
                            />
                        </div>

                    ))}
                </div>
            </div>
            <Link to="/courses/add" className="addCourse">
                <BsFillPlusCircleFill />
            </Link>
            </Container>
    </React.Fragment>
  );
};

           
    


export default Home;
