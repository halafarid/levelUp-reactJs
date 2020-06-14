import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Filters from './components/features/filters';
import CourseCard from './components/cards/courseCard';

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
{/* 
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

    </div>
   */}


  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
