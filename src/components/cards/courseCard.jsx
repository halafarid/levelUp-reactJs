import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import * as wishlistService from '../../services/wishlistService';

import {
  AiOutlineTeam,
  AiFillStar,
  AiOutlineStar,
  AiFillDelete,
  AiFillEdit,
} from "react-icons/ai";
import { useState } from "react";

const CourseCard = props => {

  const[ addToWishlist,setAddtoWishlist]=useState([])
  const { type, tab, path, history,courseType,course} = props;
  const stars = [1, 2, 3, 4];
  const [progressPercent, setProgressPercent] = useState(30);
  let [isAdded, setIsAdded] = useState(false);

   const handleWish=async e=>{
      e.stopPropagation();
      isAdded=!isAdded
      setIsAdded(isAdded)

      wishlistService.handleWishlist(course._id).then(async ({ data }) => {
       setAddtoWishlist(data);     

      })

}
// console.log(isAdded);
// console.log(addToWishlist)

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
              {course.title}
            </p>
          </div>
         
          <div className="CourseCard__items-container">
            <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">
            {course.materials?.length} Videos
            </span>
            <div className="CourseCard__icon-container">
            { courseType !=="free" &&
              <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">
                ${course?.payment}
              </span>
            }
            </div>
          </div>

          <div className="CourseCard__items-container"> 
            <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">{course.levelId.title}</span>
            <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">
              {course.duration} Hours
            </span>
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
                    : (  path !== '/profile') ?
                        <span className=" CourseCard__btn CourseCard__text--font" onClick={handleWish}>{isAdded? 'Added' : 'Add to wishlist'}</span>
                    : tab===3?
                        <Link
                            className=" CourseCard__btn CourseCard__text--font"
                            to="/courses/lessons"
                            onClick={e => e.stopPropagation()}
                        >  
                            {progressPercent === 0 ? 'Start Course' : 'Continue'}
                        </Link>
                        : 
                       null
                }
            </div>
        </div>
    </React.Fragment>
  )
};
export default CourseCard;
