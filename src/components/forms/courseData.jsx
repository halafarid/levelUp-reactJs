import React from 'react';
import { Row, Col, Button, Container, Form, Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Joi from "joi-browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaChartLine } from 'react-icons/fa';
import { MdAccessAlarms } from 'react-icons/md';
import { FiBookmark } from 'react-icons/fi';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { RiUploadLine } from 'react-icons/ri';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { number, array } from 'joi';
import { addCourse, updateCourse, getCourseById } from '../../services/courseService'
import { getAllLevels, getAllCategories } from '../../services/featuresService'


const CourseData = (props) => {
    const [state, setState] = useState({
        course: {
            title: "",
            description: "",
            duration: number,
            payment: 0,
            features: [],
            materials: [],
            categoryId: "",
            levelId: "",
            instructorId: "",
            users: number,
            reviews: [],
            progress:number
        },
        nestedInfo: {
            title: "",
            link: "",
            feature: "",
        },
        errors: {},
        categories: [],
        levels: [],
        priceVisibility: false,
        categoryTitle: "",
        levelTitle: ""

    })
    useEffect(() => {
        const path = props.match.path;
        if (path === "/courses/:id/edit") {
            const courseId = props.match.params.id;
            Promise.all([getAllCategories(), getAllLevels(), getCourseById(courseId)]).then(function (values) {
                setState({ ...state, categories: values[0].data, levels: values[1].data, course: values[2].data })
            })

        }
        else if (path === "/courses/add") {
            const currentId = localStorage.getItem("Id");
            state.course.instructorId = currentId

            Promise.all([getAllCategories(), getAllLevels()]).then(function (values) {
                setState({ ...state, categories: values[0].data, levels: values[1].data })
            })
        }
    }, [])
    const schema = {
        title: Joi.string().required(),
        description: Joi.string().required().max(256),
        duration: Joi.number().required(),
        payment: Joi.number().required(),
        features: Joi.array().min(1),
        materials: Joi.array().min(1),
        categoryId: Joi.required(),
        levelId: Joi.required(),
        instructorId: Joi.required(),
        users: Joi,
        reviews: Joi,
        progress: Joi,


    };
    const handlePriceVisibility = (visible) => {
        if (visible === false) {
            state.course.payment = 0
        }
        setState({ ...state, priceVisibility: visible })
    }
    const handleDropDown = (e, id, name) => {
        console.log("name", name)
        const course = { ...state.course };
        course[e.target.name] = id;
        if (e.target.name === "categoryId") {

            setState({ ...state, course, categoryTitle: name });
        }
        else if (e.target.name === "levelId") {

            setState({ ...state, course, levelTitle: name });
        }
    }
    const handleChange = ({ target }) => {
        const course = { ...state.course };
        course[target.name] = target.value;
        setState({ ...state, course });
    };
    const handleNestedChange = ({ target }) => {
        const nestedInfo = { ...state.nestedInfo };
        nestedInfo[target.name] = target.value;
        setState({ ...state, nestedInfo });

    };

    const handleArray = (property, courseProperty) => {
        if (state.nestedInfo[property] !== "") {
            const course = { ...state.course }
            if (typeof (property) == "string") {
                course[courseProperty].push(state.nestedInfo[property]);
            }
            else if (typeof (property) == "object") {
                course[courseProperty].push(property);
            }
            const nestedInfo = {
                title: "",
                link: "",
                feature: "",
            }
            setState({ ...state, course, nestedInfo })
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const errors = validate();
        if (errors === null || Object.keys(errors).length === 0) {
            setState({ ...state, errors: {} });
            const path = props.match.path;
            const course = { ...state.course }
            console.log(path)

            if (path === "/courses/add") {
                addCourse(course)
                    .then(async ({ data }) => {
                        console.log(data)
                        props.history.replace("/home");
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            }
            else if (path === "/courses/:id/edit") {
                console.log("edit")
                const courseId = props.match.params.id;
                updateCourse(courseId, course).then((data) => {
                    console.log("editedData", data)
                    props.history.replace("/home");

                }).catch((err) => {
                    console.log(err)
                })

            }
            return;
        }
        //clone
        console.log("errors", errors)

        setState({ ...state, errors });



    };
    const validate = () => {
        const res = Joi.validate(state.course, schema, {
            abortEarly: false
        });
        if (res.error === null) {
            return null;
        }
        const errors = {};

        for (const err of res.error.details) {
            errors[err.path] = err.message;
        }
        const path = props.match.path;
        if (path === "/courses/:id/edit") {
            delete errors._id;

        }

        return errors;
    };
    // const errorToasting=(errors)=>{
    //     for (const err of Object.values(state.errors)) {
    //         console.log(err)
    //         toast.warning(err, {
    //             position: toast.POSITION.BOTTOM_RIGHT
    //         });
    //     }

    // }

    return (
        <React.Fragment>
            <ToastContainer />
            {console.log("coursee", state.course)}
            <Container>
                <div className="course">
                    <Row>
                        <Col sm={9}>
                            <div className="course__intro">
                                <input value={state.course.title} name="title" onChange={handleChange} className="course__control course__control--text" type="text" placeholder="Course Title" />
                                {state.errors.title && <div className="alert alert-warning">{state.errors.title}</div>}

                                <div className="course__data course__add">

                                    <div className="course__info course__info-add">
                                        <img className="course__info-img" src={require('../../images/instructor/photo.jpg')} alt="Instructor" />
                                        <div className="course__data-info">
                                            <span className="course__data-title">Instructor</span>
                                            <p className="course__data-name course__data-name--lg">{localStorage.getItem("Name")}</p>
                                        </div>
                                    </div>

                                    <div className="course__info course__info-add">
                                        <div className="course__info-icon">
                                            <FiBookmark />
                                        </div>
                                        <div className="course__data-info">
                                            <span className="course__data-title">Category</span>
                                            <Dropdown >
                                                <Dropdown.Toggle className="course__control course__control--dropdown" id="dropdown-basic">
                                                    {state.categoryTitle || state.course.categoryId.title || "Choose Category"}
                                                </Dropdown.Toggle>


                                                <Dropdown.Menu >
                                                    {state.categories.map(category => (
                                                        <Dropdown.Item name="categoryId" onClick={e => handleDropDown(e, category._id, category.title)} >{category.title}</Dropdown.Item>
                                                    ))}

                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="course__details">
                                <div className="course__details-info">
                                    <Form.Group controlId="exampleForm.ControlTextarea1" >
                                        <div className="course__control course__control--file">
                                            <div className="course__control--file-icon">
                                                <RiUploadLine />
                                            </div>
                                            <Form.File id="exampleFormControlFile1" label="Upload course image" />
                                        </div>
                                        <textarea value={state.course.description} name="description" onChange={handleChange} className="course__control course__control--text" rows="8" placeholder="Course Description"></textarea>
                                        {state.errors.description && <div className="alert alert-warning">{state.errors.description}</div>}

                                    </Form.Group>
                                </div>

                                <div className="course__details-inf">
                                    <h2 className="course__details-title">Main Features</h2>
                                    <input value={state.nestedInfo.feature} onChange={handleNestedChange} name="feature" className="course__control course__control--text course__control--text--w" type="text" placeholder="Enter Feature" />

                                    <span onClick={() => { handleArray("feature", "features") }} className="course__add-icon">
                                        <BsFillPlusCircleFill />
                                    </span>
                                    {state.errors.features && <div className="alert alert-warning" style={{ width: "70%" }}>{state.errors.features}</div>}
                                    <ul className="course__details-list course__add-list">
                                        {state.course.features.map(feature => (
                                            <li>{feature}</li>
                                        ))}

                                    </ul>
                                </div>

                                <div className="course__details-inf">
                                    <h2 className="course__details-title course__add-title">Course Material</h2>
                                    <Row>
                                        <Col>
                                            <input value={state.nestedInfo.link} onChange={handleNestedChange} name="link" className="course__control course__control--text" type="text" placeholder="Lesson Link" />
                                            {state.errors.materials && <div className="alert alert-warning">{"materials must contain at least 1 link"}</div>}

                                        </Col>
                                        <Col>
                                            <input value={state.nestedInfo.title} onChange={handleNestedChange} name="title" className="course__control course__control--text" type="text" placeholder="Lesson Title" />
                                            {state.errors.materials && <div className="alert alert-warning">{"materials must contain at least 1 title"}</div>}

                                        </Col>
                                        <span onClick={() => { handleArray({ link: state.nestedInfo.link, title: state.nestedInfo.title }, "materials") }} className="course__add-icon">
                                            <BsFillPlusCircleFill />
                                        </span>
                                    </Row>
                                    <ul className="course__details-list course__add-list">
                                        {state.course.materials.map(material => (
                                            <li>{material.title}</li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="course__features">
                                <div className="middle">
                                    <label>
                                        <input type="radio" name="radio" checked readOnly />
                                        <div className="box" onClick={() => handlePriceVisibility(false)}>
                                            <span>For free</span>
                                        </div>
                                    </label>

                                    <label>
                                        <input type="radio" name="radio" />
                                        <div className="box" onClick={() => handlePriceVisibility(true)}>
                                            <span>Payment</span>
                                        </div>
                                        {state.priceVisibility && <input value={state.course.payment} name="payment" onChange={handleChange} className="course__control course__control-price course__num course__num--ml" type="number" placeholder="Enter Price" />}
                                    </label>
                                </div>
                                <ul className="list--none course__features-list">
                                    <li className="course__features-item">
                                        Duration: <input value={state.course.duration} onChange={handleChange} name="duration" className="course__num course__control" type="number" />
                                        <span className="course__features-icon"><MdAccessAlarms /></span>
                                    </li>

                                    <li className="course__features-item">
                                        Level:
                                        <Dropdown>
                                            <Dropdown.Toggle className="course__control course__control--dropdown" id="dropdown-basic">{state.levelTitle || state.course.levelId.title || "Choos Level"}</Dropdown.Toggle>
                                            <Dropdown.Menu >
                                                {state.levels.map(level => (
                                                    <Dropdown.Item name="levelId" onClick={e => handleDropDown(e, level._id, level.title)}>{level.title}</Dropdown.Item>
                                                ))}

                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <span className="course__features-icon"><FaChartLine /></span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Button onClick={handleSubmit} className="btn btn--primary-dark btn--mt0 btn--upper">{props.match.path == "/courses/add" ? "Submit Course" : "Edit Course"}</Button>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default CourseData;