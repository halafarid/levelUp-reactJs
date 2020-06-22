import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Carousel } from 'react-bootstrap';

import About from "../core/about";
import BackGround from "./backGround";
import Filters from "../features/filters";
import CourseCard from "../cards/courseCard";
import InstructorCard from "../cards/instructorCard";
import PaginationList from './../features/pagination';
import * as courseService from '../../services/courseService';

import { BsFillPlusCircleFill } from 'react-icons/bs';

const Home = props => {
    const { type, match } = props;
    const path = match.path;

    const [freeCourses,setFreeCourses]=useState([]);
    const [paidCourses,setPaidCourses]=useState([]);

    //we should call api to set count
    const [pageSize,setPageSize]=useState(3);
    
    const [coursesCount,setCourseCount]=useState(0);
    const [coursesCountFree,setCourseCountFree]=useState(0);

    const [activePage,setActivePage]=useState(1);
    const [activePageFree,setActivePageFree]=useState(1);

    useEffect(()=>{
        async function fetchFreeCourses(){
            const {data: {courses, totalCourses} } = await courseService.getFreeCourses(activePageFree,pageSize);
            setFreeCourses(courses);
            setCourseCountFree(totalCourses);
        }
        async function fetchPaidCourses(){
            const{data: {courses, totalCourses} }=await courseService.getPaidCourses(activePage,pageSize)
            setPaidCourses(courses);
            setCourseCount(totalCourses);
        }
        fetchFreeCourses();
        fetchPaidCourses();
    },[]);

    const handlePageClick=(pageNum,type)=>{
        if(type==="free courses")
        {
            setActivePageFree(pageNum);
            async function fetchFreeCourses() {
                const { data: {courses} } = await courseService.getFreeCourses(activePageFree,pageSize);
                setFreeCourses(courses);   
            }
            fetchFreeCourses();
  
        }
        else if(type="paid courses")
        {
            setActivePage(pageNum);
            async function fetchPaidCourses() {
                const { data: {courses} } = await courseService.getPaidCourses(activePage,pageSize);
                setPaidCourses(courses);   
            }
            fetchPaidCourses();
        }
    }

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
                        <div className="CourseCard__container">
                            <div className="courseCardsContainer__sub">
                                <Carousel interval={null}>
                                    <Carousel.Item className="carousel-new-item">
                                        {freeCourses.map((course) => (
                                            <div className="CourseCard" key={course._id}>
                                                <CourseCard {...props} path={path} course={course} />
                                            </div>
                                        ))}
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="CourseCard__pagination">
                                <PaginationList
                                    key={activePageFree}
                                    type="free courses"
                                    coursesCount={coursesCountFree}
                                    pageSize={pageSize}
                                    activePage={activePageFree}
                                    handlePageClick={handlePageClick}  
                                />
                            </div>
                        </div>
                    </div>
            
                    <div className=" instructor">
                        <h2 className="instructor__Inst-title"> Paid Courses</h2>
                    </div>
                    <div className="courseCardsContainer">
                        <div className="CourseCard__container">
                            <div className="courseCardsContainer__sub courseCardsContainer__sub">
                                <Carousel interval={null}>
                                    <Carousel.Item className="carousel-new-item">
                                        {paidCourses.map((course) => (
                                            <div className="CourseCard" key={course._id}>
                                                <CourseCard {...props} path={path} course={course} />
                                            </div>
                                        ))}
                                    </Carousel.Item>
                            </Carousel>
                            </div>
                            <div className="CourseCard__pagination">
                                <PaginationList
                                    type="paid courses"
                                    key={activePage}
                                    coursesCount={coursesCount}
                                    pageSize={pageSize}
                                    activePage={activePage}
                                    handlePageClick={handlePageClick}  
                                />
                            </div>
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
