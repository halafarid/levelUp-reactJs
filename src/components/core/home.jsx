import React from "react";
import BackGround from "./backGround";
import InstructorCard from "../cards/instructorCard";

import CourseCard from "../cards/courseCard";
import Filters from "../features/filters";
import About from "../core/about";
import { Link } from "react-router-dom";
import { Container, Carousel } from 'react-bootstrap';
import axios from "axios";

import { BsFillPlusCircleFill } from 'react-icons/bs';

const Home = props => {
    const { type, match } = props;
    const courses = [1, 2, 3];
    const path = match.path;
    const getById =async()=>{ await axios.get(
        "http://localhost:3000/users/profile/5eee4cc16286dc0f8834007d"
      ).then((data)=>{console.log(data)})
    }
      getById()
    return (
        <React.Fragment>
            <BackGround />

            <About />
            <Container className="InstructorContainer">
                <div className="instructor">
                    <h2 className="instructor__Inst-title">Top Rating Instructors</h2>
                </div>
                <div className="InstCard">
                    <Carousel interval={null}>
                        <Carousel.Item>
                            <div className="InstCard">
                                <InstructorCard
                                    Instructor={props.Instructor[0]}
                                />
                                <InstructorCard
                                    Instructor={props.Instructor[0]}
                                />
                                <InstructorCard
                                    Instructor={props.Instructor[0]}
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="InstCard">
                                <InstructorCard
                                    Instructor={props.Instructor[0]}
                                />
                                <InstructorCard
                                    Instructor={props.Instructor[0]}
                                />
                                <InstructorCard
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
                        <a href="#/" className="FixedSection__btn">Get Started!</a>
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
                          
                            <Carousel interval={null}>
                                <Carousel.Item className="carousel-new-item">
                                    {courses.map( course => (
                                        <div className="CourseCard" key={course}>
                                            <CourseCard
                                                {...props}
                                                path={path}
                                            />
                                        </div>
                                    ))}

                                </Carousel.Item>
                                <Carousel.Item  className="carousel-new-item">
                                    {courses.map( course => (
                                        <div className="CourseCard" key={course}>
                                            <CourseCard
                                                {...props}
                                                path={path}
                                            />
                                        </div>
                                    ))}
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>

                    <div className=" instructor">
                        <h2 className="instructor__Inst-title"> Paid Courses</h2>
                    </div>
                    <div className="courseCardsContainer">
                        <div className="courseCardsContainer__sub courseCardsContainer__sub">
                            <Carousel interval={null}>
                                <Carousel.Item className="carousel-new-item">
                                    {courses.map( course => (
                                        <div className="CourseCard" key={course}>
                                            <CourseCard
                                                {...props}
                                                path={path}
                                            />
                                        </div>
                                    ))}

                                </Carousel.Item>
                                <Carousel.Item className="carousel-new-item">
                                  {courses.map( course => (
                                        <div className="CourseCard" key={course}>
                                            <CourseCard
                                                {...props}
                                                path={path}
                                            />
                                        </div>
                                    ))}
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className=" instructor ">
                        <h2 className="instructor__Inst-title">Courses Related To Following</h2>
                    </div>
                    <div className="courseCardsContainer">
                        <div className="courseCardsContainer__sub">
                            <Carousel interval={null}>
                                <Carousel.Item className="carousel-new-item">
                                    {courses.map( course => (
                                        <div className="CourseCard" key={course}>
                                            <CourseCard
                                                {...props}
                                                path={path}
                                            />
                                        </div>
                                    ))}
                                </Carousel.Item>
                                <Carousel.Item className="carousel-new-item">
                                    {courses.map( course => (
                                        <div className="CourseCard" key={course}>
                                            <CourseCard
                                                {...props}
                                                path={path}
                                            />
                                        </div>
                                    ))}
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {type === 'instructor' && 
                <Link to="/courses/add" className="addCourse">
                    <BsFillPlusCircleFill />
                </Link>
            }
        </React.Fragment>
    );
};





export default Home;
