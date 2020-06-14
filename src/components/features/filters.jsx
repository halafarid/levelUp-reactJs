import React from 'react';
import {FormCheck} from 'react-bootstrap';
const Filters = () => {

    const levels = ['Beginner','Intermediate','Expert','All Levels']
    const Categories = ['Development','Finance','Accounting','IT & Software']

    return ( 
        <React.Fragment>
            <div className="filter">
                <p className="filter__text" >Filter By : </p>
                
                <div className="filter__items-container">
            
                    <p >All categories</p>
                    {Categories.map(Category=>(
                        <div className="filter__checkbox-container">
                        <FormCheck  type="checkbox" />
                        <span >{Category}</span>
                        </div>
                    ))}
                 
                </div>
                <hr className="filter__hr"></hr>
                <div className="filter__items-container">
                 
                    <p > The difficulty level of the course</p>
                    {levels.map(level=>(
                        <div className="filter__checkbox-container">
                        <FormCheck type="checkbox" />
                        <span >{level}</span>
                        </div>
                    ))}
                  
                </div>
                <hr className="filter__hr"></hr>

            </div>

        </React.Fragment>
    );
}
 
export default Filters;