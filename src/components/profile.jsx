import React , {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Card, Container,Nav,Button,Form } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram,AiFillStar,AiOutlineStar,AiFillEdit } from 'react-icons/ai';

import CourseCard from './cards/courseCard';
import PageNoResult from './core/pageNoResult';
import * as userService from '../services/userService';


const Profile = props => {
    const [currentUser,setCurrentUser]=useState({
        user: {
           fullName:"",
            email: "",
            password: "",
            jobtitle: "",
            jobdescription: "",
            
        }})

    const [profile,setProfile]=useState([]);
    const [freeCourses,setFreeCourses]=useState([]);
    const [paidCourses,setPaidCourses]=useState([]);
    const { type, match } = props;
    const path = match.path;
    const courses = [1, 2, 3];
    const courseType="free";
    
    const [isEdit, setIsEdit] = useState(path === '/profile/edit');
    const [isFollowing, setIsFollowing] = useState(false);
    const [tab, setTap] = useState(1);
    let pageNo = 1;
    const size = 3;

    const handleBtn = () => {
        setIsEdit(false);
        props.history.push('/profile')
    }
    
  useEffect(()=>{
  
 
    // async function fetchProfile(){
    //   const {data} = await userService.getProfile();
    //   setProfile(data);
    //  }
    //  async function fetchFreeCourses(){
    //     const {data} = await userService.getProfileFreeCourses(pageNo,size);
    //     setFreeCourses(data);
    // }
    // async function fetchPaidCourses(){
    //     const {data} = await userService.getProfilePaidCourses(pageNo,size)
    //     setPaidCourses(data);
    // }
    
    // async function handleEdit(){
    //     const {data}= await userService.getProfile();
    //     setCurrentUser(data)
    // }
    // if(isEdit){
    //     console.log("hii");
    //     handleEdit();
    // }
   
    Promise.all([userService.getProfile(),userService.getProfileFreeCourses(pageNo,size),userService.getProfilePaidCourses(pageNo,size)
    ,userService.getProfile()]).then((data)=>{
        console.log(data);
        setProfile(data[0].data);
        setFreeCourses(data[1].data);
        setPaidCourses(data[2].data);
        setCurrentUser(data[3].data);
    })
    //  fetchProfile();
    //  fetchFreeCourses();
    //  fetchPaidCourses();
  },[])

  const handleChange = ({ target }) => {
    const editUser = {...currentUser.user};
    
    editUser[target.name] = target.value;
    console.log(editUser);
    setCurrentUser({...currentUser,editUser});
    
};
  


 






  
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
                            <Card.Title className="card__card-title">{profile.fullName}</Card.Title>
                            {isEdit ?
                            <div>
                                    <input className="course__control course__control--text" name="jobtitle" onChange={handleChange} value="jkjk"/>
                                     </div>
                            : profile.job?.title ?
                            <Card.Text className="card__card-text">{profile.job.title}</Card.Text>
                            :
                            <Card.Text className="card__card-text">You don't have job title </Card.Text>

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
                                    <input className="course__control course__control--text" type="text" placeholder="Name" name="fullName" onChange={handleChange} />
                                    <input className="course__control course__control--text" type="text" placeholder="Email" name="email" onChange={handleChange} />
                                    <input className="course__control course__control--text" type="password" placeholder="Password" name="password" onChange={handleChange}  />
                                  </div>
                                    :
                                    <h1>{profile.fullName}</h1>
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
                                <textarea className="course__control course__control--text"  rows="8" placeholder="Job Description" name="job description" onChange={handleChange} value="dssd"></textarea>
                                <Button className="btn btn--primary-dark btn--pd btn--mt0 btn--mr0" onClick={handleBtn}>Save</Button>
                                <Button className="btn btn--danger btn--pd btn--mt0 btn--mr0" onClick={handleBtn}>Cancel</Button>
                            </React.Fragment>
                            : profile.job?.description?
                            <div>
                            <h2 className="profile__header">Bio </h2>
                            <p className="about__prg">{profile.job.description}</p>
                            </div>
                            :
                            <div>
                             <h2 className="profile__header">Bio </h2>
                             <p className="about__prg--center">You don't have job decription</p>
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
                                    freeCourses.length > 0 ?
                                        <React.Fragment>
                                            <div className="courseCardsContainer courseCardsContainer--ml">
                                                <div className="courseCardsContainer__sub">
                                                    {freeCourses?.map( course => (
                                                        <div className="CourseCard CourseCard--width" key={course._id}>
                                                            <CourseCard 
                                                                {...props}
                                                                type = {type}
                                                                path = {props.match.path}
                                                                tab = {tab}
                                                                course={course}
                                                                courseType={courseType}

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
                                    paidCourses.length > 0 ?
                                        <React.Fragment>
                                            <div className="courseCardsContainer courseCardsContainer--ml">
                                                <div className="courseCardsContainer__sub">
                                                    {paidCourses.map( course => (
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
                                :
                                    profile.enrolledCourses.length > 0 ?
                                        <React.Fragment>
                                            <div className="courseCardsContainer courseCardsContainer--ml">
                                                <div className="courseCardsContainer__sub">
                                                    {profile.enrolledCourses?.map( course => (
                                                        <div className="CourseCard CourseCard--width" key={course._id}>
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