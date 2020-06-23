import React,{useState,useEffect} from 'react';

import { Form, Button } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import * as courseService from '../../services/courseService';

const AddReview = props => {
    const {handleAdd}=props
   const [review,setAddReview]=useState({
       userId:localStorage.getItem('Id'),
       title:""
       
    })
  const courseId = "5ef0a1f6d821322c7cdc6c91";
  const handleChange = ({ target }) => {
    const reviews = {...review};
    reviews[target.name] = target.value;
    console.log("after",reviews)
    setAddReview(reviews);
};
   const handleSubmit=e=>{
    e.preventDefault();
      console.log(review);
      console.log(courseId);
       courseService.addReview(courseId,review).then(({data})=>{
           console.log(data);
            handleAdd(data);
       })
   }   
    console.log(review);
    return ( 
        <React.Fragment>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="course__review">Add a review</Form.Label>
                    <span className="course__feedback-stars course__feedback-stars--ml course__review-stars">
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </span>
                    <Form.Control  as="textarea" rows="5" name="title" placeholder="Your Review"onChange={handleChange} />
                </Form.Group>
                <Button className="btn btn--secondary" variant="secondary" size="lg" onClick={handleSubmit}>Submit</Button>
            </Form>
        </React.Fragment>
     );
}
 
export default AddReview;