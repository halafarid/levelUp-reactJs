import React ,{useState,useEffect}from 'react';
import {FormCheck} from 'react-bootstrap';

import * as featureService from '../../services/featuresService';

const Filters = () => {

    const [categories,setCategories]=useState([])
    const [levels,setLevels]=useState([])
    
    useEffect(()=>{
        async function fetchCategories(){
        const {data} = await featureService.getAllCategories();
        setCategories(data);
        }
        async function fetchLevels(){
            const {data} = await featureService.getAllLevels();
            setLevels(data);
            }
        fetchCategories();
        fetchLevels();
    },[])
   console.log(levels);



    return ( 
        <React.Fragment>
            <div className="filter">
            <div className="filter__container">
                <p className="filter__text" >Filter By : </p>
                
                <div className="filter__items-container">
            
                    <p  className="filter__pg">All Categories</p>
                    {categories.map( (category, i) =>(
                        <div className="filter__checkbox-container" key={i}>
                        <FormCheck  type="checkbox" />
                        <span >{category.title}</span>
                        </div>
                    ))}
                 
                </div>
                <hr className="filter__hr"></hr><br/>
                <div className="filter__items-container">
                 
                    <p className="filter__pg" > The difficulty level of the course</p>
                    {levels.map( (level, i) =>(
                        <div className="filter__checkbox-container" key={i}>
                        <FormCheck type="checkbox" />
                        <span >{level.title}</span>
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