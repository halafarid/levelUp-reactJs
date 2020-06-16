import React from 'react';
import BackGround from './backGround'
import InstructorCard from '../cards/instructorCard'
import {FaFlask} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {FaComments} from 'react-icons/fa';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Home = props => {
    return ( 
        <React.Fragment>
            <BackGround/>
            <div className="container">
            <div className="about">
            <div className="about__section">
                <h2 className="about__title">Welcome to Edusite</h2>
                <h3 className="about__title about__title--white">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</h3>
                <br/>
                <div className="about__text">
                    <div>
                        <div className="about__paragraph">
                        <div><div className="about__feature"><FaFlask className="about__feature-icon"/></div></div>
                        <div>
                        <h4 className="about__title about__title--secondary">Online Courses</h4>
                        <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                        </div>
                        </div>
                        <div className="about__paragraph">
                        <div><div className="about__feature"><FiUsers className="about__feature-icon"/></div></div>
                        <div><h4 className="about__title about__title--secondary">Expert Teachers</h4>
                        <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                        </div>
                        </div>
                        <div className="about__paragraph">
                        <div><div className="about__feature"><FaComments className="about__feature-icon"/></div></div>
                        <div><h4 className="about__title about__title--secondary">Community</h4>
                        <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="about__img">
                        <img  className="about__img-community" src={require("../../images/about.png")} alt="about"/>
                        </div>
                </div>
        <div className="instructor">
         <h2 className="instructor__Inst-title">Top Rating Instructors</h2>
         <a href="" className="instructor__Inst-title instructor__Inst-title--secondary">View all <AiOutlineArrowRight/></a>
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
        </div>        
       
        </React.Fragment>
    );
}
 
export default Home;