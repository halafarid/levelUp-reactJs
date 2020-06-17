import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Nav,Button } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram,AiFillStar,AiOutlineStar,AiFillEdit } from 'react-icons/ai';


import CourseCard from '../cards/courseCard';

const InstructorProfile = props => {
    const id = 1;
    const path = props.match.path;
    const courses = [1, 2];

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <React.Fragment>
           
            <div className="InstCard ">
                <Container className="profileContainer">
                    <Card className="card--borderless">
                        <Card.Img className="card__card-img" src={require("../../namrata-parmar.jpg")} alt="Instructor" />
                        <Card.Body>
                            <Card.Title className="card__card-title">
                                Namrata Parmar
                         </Card.Title>
                            <Card.Text className="card__card-text">
                                Photographer, Travel Bloger
                     </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="profile">
                        <div className="profile__header">
                            <div>
                                
                                <h1>Namrata Parmar</h1>
                                {console.log(path)}
                                {path ==="/Profile"?
                                <div className="stars">
                                <AiFillStar/>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar/>
                                </div>
                                : 
                                <div className="stars">
                                <AiOutlineStar/>
                                <AiOutlineStar/>
                                <AiOutlineStar/>
                                <AiOutlineStar/>
                                <AiOutlineStar/>
                                </div>
                                }
                              
                                
                            </div>
                            <div>
                            <Button className="btn btn--secondary btn--full btn--pd">Follow</Button>
                            </div>
                            <div >
                                <AiFillEdit className="profile__edit"/>
                                </div>
                            <div>
                                <FaFacebook className="profile__icons profile__icons--facebook" />
                                <AiFillTwitterCircle className="profile__icons profile__icons--twitter" />
                                <AiFillInstagram className="profile__icons profile__icons--instagram" />
                            </div>
                           
                        </div>
                        <div><br />
                            <hr className="line" /><br />
                            <div>
                                <h2 className="profile__header">Bio</h2>
                                <p>John studied Software Development at UC Berkeley and has more than 15 years
                                     of experience in software quality assurance. He's been building software and tooling,
                                     managing software engineer team many years. When he's not reading about the latest
                                     trends in computing he spends his time with his wife, snowboarding, or running..</p>
                            </div><br />
                            <hr className="line" /><br />
                            <div>
                                <h2 className="profile__header">Teacher Courses</h2>
                            </div>
                            <Nav fill variant="tabs" className="course__tabs">
                                <Nav.Item>
                                    <Nav.Link href={`/freeCourses/${id}`} as={Link} to={`/freeCourses/${id}`} className={`course__tabs-link ${path === `/freeCourses/${id}` ? 'active' : ''} `}>Free Courses</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link  href={`/paidCourses/${id}`} as={Link} to={`/paidCourses/${id}`}  className={`course__tabs-link ${path === `/paidCourses/${id}`? 'active' : ''} `}>Paid Courses</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link  href={`/enrolledCourses/${id}`} as={Link} to={`/enrolledCourses/${id}`}  className={`course__tabs-link ${path === `/enrolledCourses/${id}` ? 'active' : ''} `}>Enrolled Courses</Nav.Link>
                                </Nav.Item>
                            </Nav>
         
                            {path === `/freeCourses/:id`?
                              <div className="courseCardsContainer">
                                <div className="courseCardsContainer__sub">
                                    {courses.map((coursr) => (
                                <div className="CourseCard CourseCard--width">
                                        <CourseCard />
                                </div>
                                  
                                    ))}
                                </div>
                                </div>
                                :
                                <div className="courseCardsContainer">
                                <div className="courseCardsContainer__sub">
                                    {courses.map((coursr) => (
                                <div className="CourseCard CourseCard--width">
                                        <CourseCard />
                                </div>
                                    ))}
                                </div>
                                </div>
                            }
                            <Button className="btn btn--secondary btn--mg-left btn--pd">Load more..</Button>

                        </div>
                    </div>
                </Container>

            </div>
        </React.Fragment>
    );
}

export default InstructorProfile;