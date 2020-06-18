import React from "react";
import BackGround from "./backGround";
import InstructorCard from "../cards/instructorCard";

import CourseCard from "../cards/courseCard";
import Filters from "../features/filters";
import About from "../core/about";
import { Link } from "react-router-dom";
import { Container, Nav, Carousel } from 'react-bootstrap';


import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const Home = props => {
    const id = 1;
    const courses = [1, 2];
    const path = props.match.path;

    return (
        <React.Fragment>
            <BackGround />

            <About />
            <Container className="InstructorContainer">
                <div className="instructor">
                    <h2 className="instructor__Inst-title">Top Rating Instructors</h2>
                </div>
                <div className="InstCard">
                    {/* {props.Instructor.map(instructor => (
                        <InstructorCard
                            key={instructor.id}
                            Instructor={instructor}
                        />
                    ))
                    } */}
                    <Carousel interval={null}>
                        <Carousel.Item>
                            <div className="InstCard">
                                <InstructorCard
                                    key={props.Instructor[0].id}
                                    Instructor={props.Instructor[0]}
                                />
                                <InstructorCard
                                    key={props.Instructor[0].id}
                                    Instructor={props.Instructor[0]}
                                />
                                <InstructorCard
                                    key={props.Instructor[0].id}
                                    Instructor={props.Instructor[0]}
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="InstCard">
                                <InstructorCard
                                    key={props.Instructor[0].id}
                                    Instructor={props.Instructor[0]}
                                />
                                <InstructorCard
                                    key={props.Instructor[0].id}
                                    Instructor={props.Instructor[0]}
                                />
                                <InstructorCard
                                    key={props.Instructor[0].id}
                                    Instructor={props.Instructor[0]}
                                />
                            </div>

                        </Carousel.Item>
                    </Carousel>
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
            <div className="courses">

                <Filters />

                <div className="courses__container">

                    <div className=" instructor ">
                        <h2 className="instructor__Inst-title">Free Courses</h2>
                    </div>
                    <div className="courseCardsContainer">

                        <div className="courseCardsContainer__sub">
                            {/* {courses.map((course) => (
                                <div className="CourseCard">
                                    <CourseCard
                                        path={path}
                                    />
                                </div>

                            ))} */}
                            <Carousel interval={null}>
                                <Carousel.Item>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>

                                </Carousel.Item>
                            </Carousel>

                        </div>
                    </div>


                    <div className=" instructor">
                        <h2 className="instructor__Inst-title"> Paid Courses</h2>
                    </div>
                    <div className="courseCardsContainer">
                        <div className="courseCardsContainer__sub courseCardsContainer__sub">
                            {/* {courses.map((course) => (
                                <div className="CourseCard">
                                    <CourseCard
                                        path={path}
                                    />
                                </div>

                            ))} */}
                            <Carousel interval={null}>
                                <Carousel.Item>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>

                                </Carousel.Item>
                            </Carousel>

                        </div>
                    </div>

                    <div className=" instructor ">
                        <h2 className="instructor__Inst-title">Courses Related To Following</h2>
                    </div>
                    <div className="courseCardsContainer">
                        <div className="courseCardsContainer__sub">
                            {/* {courses.map((course) => (
                                <div className="CourseCard">
                                    <CourseCard
                                        path={path}
                                    />
                                </div>

                            ))} */}
                            <Carousel interval={null}>
                                <Carousel.Item>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>
                                    <div className="CourseCard">
                                        <CourseCard
                                            path={path}
                                        />
                                    </div>

                                </Carousel.Item>
                            </Carousel>

                        </div>
                    </div>


                </div>
            </div>
            <Link to="/courses/add" className="addCourse">
                <BsFillPlusCircleFill />
            </Link>
        </React.Fragment>
    );
};





export default Home;
