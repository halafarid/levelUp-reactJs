import React from 'react';
import { Link } from 'react-router-dom';

import {Button} from 'react-bootstrap';

import {AiFillInfoCircle} from  'react-icons/ai';

const PaymentCard = (props) => {
    return ( 
        <React.Fragment>
            <div className="PaymentCard">
   
            <div className="PaymentCard--c">
                <h3 className="PaymentCard__head">Total</h3>
                <div className=" PaymentCard__text PaymentCard__text--l">199.99$</div>
                <hr className="PaymentCard__hr"></hr>
                <div className=" PaymentCard--c PaymentCard__info">
                    <div className="PaymentCard__img PaymentCard__img--visa"></div>
                    <p className="PaymentCard__text-m"> Pay 391.00 EGP ( Save 69.00 EGP )By using Commercial International Bank - CIB</p>
                </div>
                <div className="PaymentCard--c PaymentCard__info">
                     <div className="PaymentCard__img PaymentCard__img--visa"></div>
                    <p className="PaymentCard__text-m">Pay 391.00 EGP ( Save 69.00 EGP ) By using Commercial International Bank - CIB</p>
                </div>
                <hr className="PaymentCard__hr"></hr>

                <Link  to="/paymentform">
                <Button className="PaymentCard__btn">PROCEED TO CHECKOUT </Button>
                </Link>
                {/* </div> */}
                         
            </div>
            </div>
        </React.Fragment>
     );
}
 
export default PaymentCard;