import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const CourseReviews = () => {
    return ( 
        <React.Fragment>
            <div className="course__info">
                <img className="course__info-img course__info-img--lg" src={require('../../images/instructor/photo.jpg')} alt="Instructor"/>
                <div className="course__data-info">
                    <h3 className="course__data-name">Hala Farid</h3>
                    <div>
                        <span className="course__data-title">15/6/2020</span>
                        <span className="course__feedback-stars course__feedback-stars--ml">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </span>
                    </div>
                </div>

                <p className="course__details-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quod distinctio obcaecati dolor repellat animi repudiandae excepturi, aliquid porro! Qui!
                </p>
            </div>

            <hr className="horizontal"/>
        </React.Fragment>
    );
}
 
export default CourseReviews;