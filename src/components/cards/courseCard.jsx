import React from 'react';
import { Link } from 'react-router-dom';

import {AiOutlineTeam , AiFillStar ,AiOutlineStar,AiFillDelete,AiFillEdit} from  'react-icons/ai';

const CourseCard = (props) => {
    const stars=[1,2,3,4];
    return ( 
        <React.Fragment>
              <Link to={`/courses/1/details`} className="CourseCard__link">

                <div className="CourseCard__img"></div>
                <div className="CourseCard--box">

                <p className="CourseCard__text CourseCard__text--font ">Learning How To Learn: Powerful mental tools to help you master ... </p>
                <div className="CourseCard__items-container">
                    <span className="CourseCard__text CourseCard__text--space CourseCard__text--font">Expert</span>
                    <div className="CourseCard__icon-container">
                    <AiOutlineTeam className="CourseCard__icon"/> 
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

                        {stars.map(star=> <AiFillStar className="CourseCard__star" ></AiFillStar>)}
                    <AiOutlineStar className="CourseCard__star "></AiOutlineStar>
                    {props.path==="/home"||props.path==="/freeCourses/:id" ||props.path==="/paidCourses/:id" ||props.path==="/enrolledCourses/:id"?
                   <Link className=" CourseCard__btn CourseCard__text--font"  to="/shoppingcart">Add to cart</Link>
                   :
                    <div className="crud">
                    <AiFillEdit className="crud__edit"/>
                    <AiFillDelete className="crud__delete"/>
                     </div>
                    }
                    </div>
                    </div>
                </div>
                </div>
              </Link>
        </React.Fragment>
     );
}
 
export default CourseCard;