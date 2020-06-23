import React    from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const InstructorCard = props => {
  
    const id=1;
  
    return ( 
        <React.Fragment>
            <Container className="InstructorContainer">
                <Link  className="InstructorContainer__link" to={`/profile/${id}`}>
                    <Card >
                        <Card.Img  className="card__card-img" src={require("../../images/instructor/photo.jpg")} alt="Instructor"/>
                        <Card.Body>
                            <Card.Title className="card__card-title">
                            {props.Instructor.fullName}</Card.Title>
                            <Card.Text className="card__card-text">
                            {props.Instructor.job.title}
                            </Card.Text>
                            <div className="rating">
                                <AiFillStar/>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar/>
                            </div>
                        </Card.Body>
                    </Card>
                </Link>
            </Container>
        </React.Fragment>
    );
}
 
export default InstructorCard;