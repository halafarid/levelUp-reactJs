import React ,{ useState}from 'react';
import {Card} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
// import Img from './namrata-parmar.jpg'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const InstructorCard = props => {

  
    return ( 
        
        <React.Fragment>
        <Container>
         
             <Card >
                <Card.Img  className="card__card-img" src={require("../../namrata-parmar.jpg")} alt="Instructor"/>
                <Card.Body>
                    <Card.Title className="card__card-title">{props.Instructor.name}</Card.Title>
                    <Card.Text className="card__card-text">
                      {props.Instructor.job}
                     </Card.Text>
                    <div className="rating">
                    <AiFillStar/>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar/>
                    <span className="rating__num">{props.Instructor.rating}</span>
                    </div>
                    <p className="card-text card-text--color"> {props.Instructor.reviews} Reviews </p>
                </Card.Body>

            </Card>
            </Container>
        </React.Fragment>
    );
}
 
export default InstructorCard;