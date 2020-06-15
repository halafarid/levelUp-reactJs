import React from 'react';
import {AiFillInfoCircle} from  'react-icons/ai';

const PaymentCard = (props) => {
    return ( 
        <React.Fragment>
            <div className="PaymentCard">
   
            <div className="PaymentCard--c">
                <h4>Total</h4>
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
                <div className=" PaymentCard__info">
                    <AiFillInfoCircle className="PaymentCard__icon"/>
                    <p>Add 240.00 EGP of "Fulfilled by Level-Up" items to your order to qualify for FREE Learning.</p>
                </div>
                <button className="PaymentCard__btn">PROCEED TO CHECKOUT</button>

            </div>
                         
            </div>
        </React.Fragment>
     );
}
 
export default PaymentCard;