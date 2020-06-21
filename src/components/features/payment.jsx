import React from 'react';
import ShoppingListItem from '../cards/shoppingListItem';
import PaymentCard from '../cards/paymentCard';

const Payment = (props) => {
    const items=[1];
 
    return ( 
        <React.Fragment>
            <div className="paymentCardsContainer">
            <div className="paymentCardsContainer__sub">
            {items.map(item=> <ShoppingListItem key={item}/>)}
            </div>
                <PaymentCard/>
            </div>
        </React.Fragment>
    );
}
 
export default Payment;