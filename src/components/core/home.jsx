import React from 'react';
import BackGround from './backGround';
import InstructorCard from '../cards/instructorCard';

const Home = props => {
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