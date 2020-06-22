import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

import {
  AiOutlineTeam,
  AiFillStar,
  AiOutlineStar,
  AiFillDelete,
  AiFillEdit,
} from "react-icons/ai";
import { useState } from "react";

const CourseCard = props => {
  const { type, tab, path, history } = props;

  const stars = [1, 2, 3, 4];
  const [progressPercent, setProgressPercent] = useState(30);

  return (
    <React.Fragment>
        <div className="CourseCard__container" onClick={() => history.push('/courses/1/details')}>
          <div className="CourseCard__img">
            <img
              className="CourseCard__img-sm"
              src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg"
              alt="course"
            />
          </div>
          <div className="CourseCard--box">
            <p className="CourseCard__text CourseCard__text--font ">
              Learning How To Learn: Powerful mental tools to help you master
              ...
            </p>
          </div>
         
          <div className="CourseCard__items-container">
            <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">
              Expert
            </span>
            <div className="CourseCard__icon-container">
              <AiOutlineTeam className="CourseCard__icon" />
              <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">
                100
              </span>
            </div>
          </div>

          <div className="CourseCard__items-container">
            <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">
              Duration : 2H{" "}
            </span>
            <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">$149.99</span>
          </div>
            <div className="CourseCard__items-container">
                <div className="CourseCard__stars-container">
                    <div className="CourseCard__text CourseCard__text--space">
                        {stars.map(star=> <AiFillStar className="CourseCard__star" key={star} ></AiFillStar>)}
                        <AiOutlineStar className="CourseCard__star "></AiOutlineStar>
                    
                    </div>
                </div>
            </div>
            { ( (tab === 3 && path === '/profile') || (type === 'user' && path === '/profile') ) && 
                <div className="CourseCard__items-container">
                    <ProgressBar variant="info" animated now={progressPercent} />
                    <div className="CourseCard__text--colored">
                        {progressPercent} %
                    </div>
                </div>
            }
            <div className="CourseCard__btnCont">
                { 
                    type === 'instructor' && path === '/profile' && tab !== 3 ?
                        <div className="crud">
                            <Link to="/courses/1/edit">
                              <AiFillEdit className="crud__edit" onClick={e => e.stopPropagation()}/>
                            </Link>
                            <AiFillDelete className="crud__delete"/>
                        </div>
                    : path !== '/profile' ?
                        <span className=" CourseCard__btn CourseCard__text--font" onClick={e => e.stopPropagation()}>Add to cart</span>
                    :
                        <Link
                            className=" CourseCard__btn CourseCard__text--font"
                            to="/courses/lessons"
                            onClick={e => e.stopPropagation()}
                        >
                            {progressPercent === 0 ? 'Start Course' : 'Continue'}
                        </Link>
                }
            </div>
        </div>
    </React.Fragment>
  )
};
export default CourseCard;
