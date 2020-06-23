import React from 'react';
import { Container } from 'react-bootstrap';
import InstructorCard from './cards/instructorCard';
import PageNoResult from './core/pageNoResult';

const Follows = props => {
    const { Instructor } = props;

    return ( 
        <React.Fragment>
            <Container>
                {
                    Instructor.length > 0 ?
                        <div className="InstCard">
                            {Instructor.map(instructor => (
                                <InstructorCard
                                    key={instructor.id}
                                    Instructor={instructor}
                                />
                            ))}
                        </div>
                    :
                    <PageNoResult />
                        }
            </Container>
        </React.Fragment>
    );
}
 
export default Follows;