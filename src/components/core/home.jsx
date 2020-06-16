import React from 'react';
import BackGround from './backGround';
import InstructorCard from '../cards/instructorCard';
import CourseCard from "../cards/courseCard";
import Filters from "../features/filters";
import FixedSection from '../FixedSection';

const Home = props => {
    const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return ( 
        <React.Fragment>
            <BackGround/>
            
            <div className="courseCardsContainer">
              <Filters />
              <div className="courseCardsContainer__sub">
                {courses.map((coursr) => (
                  <CourseCard />
                ))}
              </div>
            </div>
        
            <div className="InstCard"> 
                {props.Instructor.map(instructor=>(
                    <InstructorCard
                    key={instructor.id}
                    Instructor={instructor}
                    />
                ))
                }
            </div>

           
      
            <FixedSection/>
        </React.Fragment>
    );
}

export default Home;