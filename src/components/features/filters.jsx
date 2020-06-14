import React from 'react';
import {FormCheck} from 'react-bootstrap';
const Filters = () => {
    return ( 
        <React.Fragment>
            <div className="filter">
                <p>Filter By : </p>
                <div className="filter__items-container">
                    <div >
                    <p> The difficulty level of the course</p>
                    <FormCheck type="checkbox"  />
                    <p>Beginner</p>
                    </div>
                </div>
                <hr></hr>
                <div className="filter__items-container">
                    <div>
                    <p>All categories</p>
                    <Form.Check type="checkbox"  />
                    <p>Development</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
 
export default Filters;