import React from 'react';

import { AiOutlineTeam, AiFillStar, AiOutlineStar, AiFillDelete, AiFillEdit } from 'react-icons/ai';

const CourseCard = (props) => {
    const stars = [1, 2, 3, 4];
    return (
        <React.Fragment>
            <div className="CourseCard__container" onClick={() => props.history.push('/courses/1/details')}>
                <div className="CourseCard__img">
                    <img className="CourseCard__img-sm" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg" alt="course" />
                </div>
                
                <div className="CourseCard--box">
                    <p className="CourseCard__text CourseCard__text--font">Learning How To Learn: Powerful mental tools to help you master ... </p>
                </div>
                <div className="CourseCard__items-container">
                    <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">Expert</span>
                    <div className="CourseCard__icon-container">
                        <AiOutlineTeam className="CourseCard__icon" />
                        <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">100</span>
                    </div>
                </div>
                <div className="CourseCard__items-container">
                    <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">Duration : 2H </span>
                    <span className="CourseCard__text CourseCard__text--space CourseCard__text--font"> $149.99 </span>
                </div>
                <div className="CourseCard__items-container">
                    <div className="CourseCard__stars-container">
                        <div className="CourseCard__text CourseCard__text--space">

                            {stars.map(star=> <AiFillStar className="CourseCard__star" key={star} ></AiFillStar>)}
                            <AiOutlineStar className="CourseCard__star "></AiOutlineStar>
                            {props.path==="/home"||props.path==="/freeCourses/:id" ||props.path==="/paidCourses/:id" ||props.path==="/enrolledCourses/:id"?
                                <span className=" CourseCard__btn CourseCard__text--font" onClick={e => e.stopPropagation()}>Add to cart</span>
                            :
                                <div className="crud">
                                    { props.type === 'instructor' && props.path === '/profile' && props.tab !== 3 &&
                                        <React.Fragment>
                                            <AiFillEdit className="crud__edit"/>
                                            <AiFillDelete className="crud__delete"/>
                                        </React.Fragment>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CourseCard;