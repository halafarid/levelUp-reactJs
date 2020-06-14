import React from 'react';
import InstructorCard from '../cards/instructorCard';

const Home = props => {
    return ( 
        <React.Fragment>
        {props.Instructor.map(instructor=>(
            <InstructorCard
             key={instructor.id}
             Instructor={instructor}
            />
        ))

        }
        </React.Fragment>
    );
}
 
export default Home;