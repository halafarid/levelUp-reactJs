import React from 'react';
import BackGround from './backGround';
import InstructorCard from '../cards/instructorCard';
import CourseCard from "../cards/courseCard";
import Filters from "../features/filters";

const Home = props => {
    const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return ( 
        <React.Fragment>
            <BackGround/>
            
            <div className="InstCard"> 
                {props.Instructor.map(instructor=>(
                    <InstructorCard
                    key={instructor.id}
                    Instructor={instructor}
                    />
                ))
                }
            </div>

            <div className="courseCardsContainer">
              <Filters />
              <div className="courseCardsContainer__sub">
                {courses.map((coursr) => (
                  <CourseCard />
                ))}
              </div>
            </div>

            {/* <div className="flex">
                <div className="flex-col">
                    <ShoppingListItem/>
                    <ShoppingListItem/>
                    <ShoppingListItem/>
                    <ShoppingListItem/>
                    <ShoppingListItem/>
                    <ShoppingListItem/>
                </div>
                <PaymentCard/>
            </div> 
            <div className="cont">
                <Filters/>
                <div className="cardsContainer">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/> 
                </div>
            </div> */}
        </React.Fragment>
    );
}

export default Home;