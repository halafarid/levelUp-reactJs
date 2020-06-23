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

        fullName:"",
         email: "",
         password: "",
         job:{title:"",description:""}
         
     })
    
     const [oldUser,setOldUser]=useState({
        fullName:"",
        email: "",
        password: "",
        job:{title:"", description:""}
     })

    const userId=props.match.params?.id;

    const [profile,setProfile]=useState({});
    const [freeCourses,setFreeCourses]=useState([]);
    const [paidCourses,setPaidCourses]=useState([]);
    const { type, match } = props;
    const path = match.path;
    const courseType="free";
    const [follow,setFollow]=useState([])
    const [isEdit, setIsEdit] = useState(path === '/profile/edit');
    let [isFollowing, setIsFollowing] = useState(profile.following?.includes(userId));
    const [tab, setTap] = useState(1);
    let pageNo = 1;
    let pageno=1
    const size = 3;

    console.log(profile.following?.includes(userId));
   
    useEffect( () => {
        async function fetchProfile(){
            if (props.match.path === '/profile/:id') {
                const { data: userProfile} = await userService.getUserById(userId);
                setCurrentUser(userProfile);
                setFreeCourses(userProfile.ownFreeCourses);
                setPaidCourses(userProfile.ownPaidCourses);
            } else {
                Promise.all([userService.getProfile(),userService.getProfileFreeCourses(pageNo,size),userService.getProfilePaidCourses(pageno,size)
                    ,userService.getProfile(),]).then((data)=>{
                        setProfile(data[0].data);
                        setFreeCourses(data[1].data);
                        setPaidCourses(data[2].data);
                        setCurrentUser(data[3].data);
                        setOldUser(data[3].data)
                });
            }
        }
        fetchProfile();
    },[props.match.params.id]);

const handleFollow=()=>{
    isFollowing=!isFollowing
    setIsFollowing(isFollowing);
    userService.handleFollows(userId).then(({data})=>{
        setFollow(data);
       
    })
  

}

  const handleChange = ({ target }) => {
    const editUser = {...currentUser};

    if (target.name === 'title' || target.name === 'description') {
        editUser.job[target.name] = target.value;
    } else {
        editUser[target.name] = target.value;
    }
    setCurrentUser(editUser);
    
};
const handleSubmit = async e => {
    e.preventDefault();
    if(isEdit){
       await userService.updateUser(profile._id,currentUser).then((data) => {
            console.log(data)
            setIsEdit(false);
            props.history.push('/profile')

        })
      
    }

}
const handleCancel=async e=>{
    e.preventDefault();
    if(isEdit){

       setCurrentUser(oldUser);

    }
}
  
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
                            <Card.Title className="card__card-title">{currentUser.fullName}</Card.Title>
                            {isEdit ?
                            <div>
                                    <input className="course__control course__control--text" name="title" onChange={handleChange} value={currentUser.job?.title}/>
                                     </div>
                            : currentUser.job?.title ?
                            <Card.Text className="card__card-text">{currentUser.job?.title}</Card.Text>
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
                                    <input className="course__control course__control--text" type="text" placeholder="Name" name="fullName" onChange={handleChange} value={currentUser.fullName} />
                                    <input className="course__control course__control--text" type="text" placeholder="Email" name="email" onChange={handleChange} value={currentUser.email} />
                                    <input className="course__control course__control--text" type="password" placeholder="Password" name="password" onChange={handleChange} value={currentUser.password} />
                                  </div>
                                    :
                                    <h1>{currentUser.fullName}</h1>
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
                                    <Button className={`btn btn--full btn--pd ${isFollowing? 'btn--success' : 'btn--secondary'}`} onClick={handleFollow}>{isFollowing ? 'Following' : 'Follow'}</Button>
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
                                <textarea className="course__control course__control--text"  rows="8" placeholder="Job Description" name="description" onChange={handleChange} value={currentUser.job?.description} ></textarea>
                                <Button className="btn btn--primary-dark btn--pd btn--mt0 btn--mr0" onClick={handleSubmit}>Save</Button>
                                <Button className="btn btn--danger btn--pd btn--mt0 btn--mr0" onClick={handleCancel}>Cancel</Button>
                            </React.Fragment>
                            : currentUser.job?.description?
                            <div>
                            <h2 className="profile__header">Bio </h2>
                            <p className="about__prg">{currentUser.job?.description}</p>
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