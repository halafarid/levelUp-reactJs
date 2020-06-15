import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';

const AddReview = () => {
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
                    <Form.Control as="textarea" rows="5" placeholder="Your Review"/>
                </Form.Group>
                <Button className="btn btn--secondary" variant="secondary" size="lg">Submit</Button>
            </Form>
        </React.Fragment>
     );
}
 
export default AddReview;