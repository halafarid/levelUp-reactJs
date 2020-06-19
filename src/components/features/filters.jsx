import React from 'react';
import {FormCheck} from 'react-bootstrap';
const Filters = () => {

    const levels = ['Beginner','Intermediate','Expert']
    const Categories = ['Development','Finance','Accounting','IT & Software']

    return ( 
        <React.Fragment>
            <div className="filter">
            <div className="filter__container">
                <p className="filter__text" >Filter By : </p>
                
                <div className="filter__items-container">
            
                    <p  className="filter__pg">All Categories</p>
                    {Categories.map( (Category, i) =>(
                        <div className="filter__checkbox-container" key={i}>
                        <FormCheck  type="checkbox" />
                        <span >{Category}</span>
                        </div>
                    ))}
                 
                </div>
                <hr className="filter__hr"></hr><br/>
                <div className="filter__items-container">
                 
                    <p className="filter__pg" > The difficulty level of the course</p>
                    {levels.map( (level, i) =>(
                        <div className="filter__checkbox-container" key={i}>
                        <FormCheck type="checkbox" />
                        <span >{level}</span>
                        </div>
                    ))}
                  
                </div>
                <hr className="filter__hr"></hr>
               </div>
            </div>

        </React.Fragment>
    );
}
 
export default Filters;