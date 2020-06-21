import React , {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Card, Container,Nav,Button,Form } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram,AiFillStar,AiOutlineStar,AiFillEdit } from 'react-icons/ai';

import CourseCard from './cards/courseCard';
import PageNoResult from './core/pageNoResult';
import * as userService from '../services/userService';



const Profile = props => {
    const [profile,setProfile]=useState([])
    const { type, match } = props;
    const path = match.path;
    const courses = [1, 2, 3];

    const [isEdit, setIsEdit] = useState(path === '/profile/edit');
    const [isFollowing, setIsFollowing] = useState(false);
    const [tab, setTap] = useState(1);

    const handleBtn = () => {
        setIsEdit(false);
        props.history.push('/profile')
    }
    
  useEffect(()=>{

    async function fetchProfile(){
      const {data} = await userService.getProfile();
      console.log(data);
      setProfile(data);
     }
     fetchProfile();

  },[])

  console.log(profile);
  
    return (
        <React.Fragment>
           
            <div className="InstCard ">
                <Container className="profileContainer">
                    <Card className="card--borderless">
                        <Card.Img className="card__card-img" src={require("../images/instructor/photo.jpg")} alt="Instructor" />
                        {isEdit &&
                            <div>
                                <div className="profile__edit profile__edit--upload">
                                    <Form.File id="exampleFormControlFile1" label='📷' />
                                </div>
                            </div>
                        }
                        <Card.Body>
                            <Card.Title className="card__card-title">Namrata Parmar</Card.Title>
                            {isEdit ?
                            <div>
                                    <input className="course__control course__control--text" value="Front-End Developer"/>
                                     </div>
                            : 
                            <Card.Text className="card__card-text">Photographer, Travel Bloger</Card.Text>
                            }
                            { !(type === 'user' && path === '/profile') &&
                                <div className="stars">
                                    <AiFillStar/>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar/>
                                </div>
                            }
                        </Card.Body>
                    </Card>
                    <div className="profile">
                        <div className="profile__header">
                            <div>
                                {isEdit ?
                                 <div className="edit"> 
                                    <input className="course__control course__control--text" type="text" placeholder="Name" value="Sara Tarek"/>
                                    <input className="course__control course__control--text" type="text" placeholder="Email" value="sara123@gmail.com"/>
                                    <input className="course__control course__control--text" type="password" placeholder="Password" value="12344556677" />
                                  </div>
                                    :
                                    <h1>Namrata Parmar</h1>
                                }

                                { (path ==="/profile/:id" && !isEdit) &&
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
                                { (path ==="/profile/:id" && !isEdit)&& 
                                    <Button className={`btn btn--full btn--pd ${isFollowing? 'btn--success' : 'btn--secondary'}`} onClick={() => setIsFollowing(!isFollowing)}>{isFollowing ? 'Following' : 'Follow'}</Button>
                                }
                            </div>
                            <div >
                                { path === '/profile' &&
                                    <Link to="/profile/edit" onClick={() => setIsEdit(true)}> <AiFillEdit  className="profile__edit"/></Link>
                                }
                            </div>
                            <div className="prof-icons">
                                <FaFacebook className="profile__icons profile__icons--facebook" />
                                <AiFillTwitterCircle className="profile__icons profile__icons--twitter" />
                                <AiFillInstagram className="profile__icons profile__icons--instagram" />
                            </div>
                        </div>
                        <div>

                        <hr className="line" />

                        {isEdit ?         
                            <React.Fragment>
                                <textarea className="course__control course__control--text"  rows="8" placeholder="Job Description" value="Sara are responsible for implementing visual elements that users see and interact within a web application. In general, they are supported by back-end web developers, who are responsible for server-side 
                                application logic and integration of the work front-end developers do."></textarea>
                                <Button className="btn btn--primary-dark btn--pd btn--mt0 btn--mr0" onClick={handleBtn}>Save</Button>
                                <Button className="btn btn--danger btn--pd btn--mt0 btn--mr0" onClick={handleBtn}>Cancel</Button>
                            </React.Fragment>
                            :
                            <div>  
                                <h2 className="profile__header">Bio</h2>
                                <p className="about__prg">John studied Software Development at UC Berkeley and has more than 15 years
                                    of experience in software quality assurance. He's been building software and tooling,
                                    managing software engineer team many years. When he's not reading about the latest
                                    trends in computing he spends his time with his wife, snowboarding, or running..</p>
                            </div>
                        }
                        <hr className="line" />

                        <div>
                            <h2 className="profile__header">Teacher Courses</h2>
                        </div>
                            <Nav fill variant="tabs" className="course__tabs">
                                <Nav.Item>
                                    <Nav.Link className={`course__tabs-link ${tab === 1 ? 'active' : ''} `} onClick={() => setTap(1)}>Free Courses</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={`course__tabs-link ${tab === 2 ? 'active' : ''} `} onClick={() => setTap(2)}>Paid Courses</Nav.Link>
                                </Nav.Item>
                                { type === 'instructor' && path === '/profile' &&
                                    <Nav.Item>
                                        <Nav.Link className={`course__tabs-link ${tab === 3 ? 'active' : ''} `} onClick={() => setTap(3)}>Enrolled Courses</Nav.Link>
                                    </Nav.Item>
                                }
                            </Nav>
                                
                            {
                                tab === 1 ?
                                    courses.length > 0 ?
                                        <React.Fragment>
                                            <div className="courseCardsContainer courseCardsContainer--ml">
                                                <div className="courseCardsContainer__sub">
                                                    {profile.ownCourses?.map( course => (
                                                        <div className="CourseCard CourseCard--width" key={course}>
                                                            <CourseCard 
                                                                {...props}
                                                                type = {type}
                                                                path = {props.match.path}
                                                                tab = {tab}
                                                                course={course}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <Button className="btn btn--secondary btn--mg-left btn--pd">Load more..</Button>
                                        </React.Fragment>
                                    :
                                    <PageNoResult />
                                : tab === 2 ?
                                    // courses.length > 0 ?
                                    //     <React.Fragment>
                                    //         <div className="courseCardsContainer courseCardsContainer--ml">
                                    //             <div className="courseCardsContainer__sub">
                                    //                 {courses.map( course => (
                                    //                     <div className="CourseCard CourseCard--width" key={course}>
                                    //                         <CourseCard 
                                    //                             {...props}
                                    //                             type = {type}
                                    //                             path = {props.match.path}
                                    //                             tab = {tab}
                                    //                         />
                                    //                     </div>
                                    //                 ))}
                                    //             </div>
                                    //         </div>
                                    //         <Button className="btn btn--secondary btn--mg-left btn--pd">Load more..</Button>
                                    //     </React.Fragment>
                                    // :
                                    <PageNoResult />
                                :
                                    courses.length > 0 ?
                                        <React.Fragment>
                                            <div className="courseCardsContainer courseCardsContainer--ml">
                                                <div className="courseCardsContainer__sub">
                                                    {profile.ownCourses?.map( course => (
                                                        <div className="CourseCard CourseCard--width" key={course}>
                                                            <CourseCard 
                                                                {...props}
                                                                type = {type}
                                                                path = {props.match.path}
                                                                tab = {tab}
                                                                course={course}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <Button className="btn btn--secondary btn--mg-left btn--pd">Load more..</Button>
                                        </React.Fragment>
                                    :
                                    <PageNoResult />
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Profile;