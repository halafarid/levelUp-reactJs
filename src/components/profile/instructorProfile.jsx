import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const InstructorProfile = props => {
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
                        </div>
                        <div >
                            <FaFacebook className="profile__icons" />
                            <AiFillTwitterCircle  className="profile__icons profile__icons--warning"/>
                            <AiFillInstagram className="profile__icons profile__icons--danger" />
                        </div>
                        </div>
                        <div><br/>
                            <hr className="line" /><br/>
                            <div>
                                <h2 className="profile__header">Bio</h2>
                                <p>John studied Software Development at UC Berkeley and has more than 15 years
                                     of experience in software quality assurance. He's been building software and tooling,
                                     managing software engineer team many years. When he's not reading about the latest
                                     trends in computing he spends his time with his wife, snowboarding, or running..</p>
                            </div><br/>
                            <hr className="line"/><br/>
                            <div>
                                <h2 className="profile__header">Teacher Courses</h2>
                        </div>
                    </div>
                    </div>
                </Container>

            </div>
        </React.Fragment>
    );
}

export default InstructorProfile;