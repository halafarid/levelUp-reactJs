import React from 'react';
import ShoppingListItem from '../cards/shoppingListItem';
import PaymentCard from '../cards/paymentCard';

const Payment = (props) => {
    const items=[1,2,3,4,5,6,7,8,9];
    return ( 
        <React.Fragment>
            <div className="flex">
            <div className="flex-col">
            {items.map(item=> <ShoppingListItem />)}
            </div>
                <PaymentCard/>
            </div>
        </React.Fragment>
    );
}
 
export default Payment;