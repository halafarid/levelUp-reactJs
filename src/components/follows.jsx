import React from 'react';
import { Container } from 'react-bootstrap';
import InstructorCard from './cards/instructorCard';

const Follows = props => {
    return ( 
        <React.Fragment>
            <Container>
                <div className="InstCard">
                    {props.Instructor.map(instructor => (
                        <InstructorCard
                            key={instructor.id}
                            Instructor={instructor}
                        />
                    ))
                    }
                </div>
            </Container>
        </React.Fragment>
    );
}
 
export default Follows;