import React, { useState, useEffect } from 'react';
import { FormCheck } from 'react-bootstrap';

import * as featureService from '../../services/featuresService';
import { filterCourses } from '../../services/courseService'

const Filters = (props) => {

    const [categories, setCategories] = useState([])
    const [levels, setLevels] = useState([])
    const [filteredCategory, setFilteredCategory] = useState([])
    const [filteredLevels, setFilteredLevels] = useState([])
    let [paid, setPaid] = useState([])
    let [free, setFree] = useState([])


    useEffect(() => {
        async function fetchCategories() {
            const { data } = await featureService.getAllCategories();
            setCategories(data);
        }
        async function fetchLevels() {
            const { data } = await featureService.getAllLevels();
            setLevels(data);
        }
        fetchCategories();
        fetchLevels();
    }, [])

    const handleCheck = (id, e) => {
        console.log(id)
        console.log(e.target.checked)
        if (e.target.checked === true) {
            let arr1=[]
            let arr2=[]
            const levelIndex = levels.findIndex(l => l._id === id)
            if (levelIndex != -1) {
                const filterd = [...filteredLevels]
                filterd.push(id)
                arr1=filterd
                setFilteredLevels(filterd)
                console.log("level")
            }
            const categoryIndex = categories.findIndex(c => c._id === id)
            if (categoryIndex != -1) {
                const filterd = [...filteredCategory]
                filterd.push(id)
                arr2=filterd
                setFilteredCategory(filterd)
                console.log("category")
            }
                    filterCourses(arr2.toString(), arr1.toString()).then(({ data }) => {
                        console.log(data[0].courses)

                        const freeCourses = data[0].courses.filter(c => c.payment === 0)
                        const paidCourses = data[0].courses.filter(c => c.payment > 0)
                        props.onFilterFree(freeCourses)
                        props.onFilterPaid(paidCourses)
                        console.log("freeCourses",freeCourses)
                        console.log("paidCourses",freeCourses)
                        setFree(freeCourses);
                        setPaid(paidCourses);
                
                    })
        }
        else if (e.target.checked === false) {
            let arr1=[]
            let arr2=[]
            const levelIndex = levels.findIndex(l => l._id === id)
            if (levelIndex != -1) {
                const filterd = [...filteredLevels]
                filterd.splice(levelIndex, 1)
                arr1=filterd
                setFilteredLevels(filterd)

            }
            const categoryIndex = categories.findIndex(c => c._id === id)
            if (categoryIndex != -1) {
                const filtred = [...filteredCategory]
                console.log("filtred", categoryIndex)
                filtred.splice(levelIndex, 1)
                console.log("filtred", filtred)
                arr2=filtred
                setFilteredCategory(filtred)

            }
            filterCourses(arr2.toString(), arr1.toString()).then(({ data }) => {
                const freeCourses = data[0].courses.filter(c => c.payment === 0)
                const paidCourses = data[0].courses.filter(c => c.payment > 0)
                props.onFilterFree(freeCourses)
                props.onFilterPaid(paidCourses)
                setFree(freeCourses);
                setPaid(paidCourses);
        
            })
        }
    }

    return (
        <React.Fragment>
            {console.log("fcategories", filteredCategory)}
            {console.log("fLevels", filteredLevels)}

            <div className="filter">
                <div className="filter__container">
                    <p className="filter__text" >Filter By : </p>

                    <div className="filter__items-container">

                        <p className="filter__pg">All Categories</p>
                        {categories.map((category, i) => (
                            <div onClick={(event) => handleCheck(category._id, event)} className="filter__checkbox-container" key={i}>
                                <FormCheck type="checkbox" />
                                <span >{category.title}</span>
                            </div>
                        ))}

                    </div>
                    <hr className="filter__hr"></hr><br />
                    <div className="filter__items-container">

                        <p className="filter__pg" > The difficulty level of the course</p>
                        {levels.map((level, i) => (
                            <div onClick={(event) => handleCheck(level._id, event)} className="filter__checkbox-container" key={i}>
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