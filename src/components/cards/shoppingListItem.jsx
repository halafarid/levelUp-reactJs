import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingListItem = (props) => {
    return (
        <React.Fragment>
            <div className="shoppingList">
                <div className="shoppingList__main-container">

              <div className="shoppingList__img"></div>
              <div className="shoppingList__mainInfo">
                  <p  className="shoppingList__Text--lg"> Object-Oriented JavaScript-ES6</p>
                  <p className="shoppingList__Text--colored">199.99$</p>
                  <div>
                  <span className="shoppingList__Text--sm  ">Level : </span>
                  <span className="shoppingList__Text--sm shoppingList__Text--span">Beginner </span>
                  </div>
                  <span className="shoppingList__Text--sm ">Sold by : </span>
                  <span className="shoppingList__Text--sm shoppingList__Text--span">Merna Nashaat</span>
                
             </div>
              
                </div>
                <hr className="shoppingList__hr"></hr>
                <div className="shoppingList__btnContainer">
                <Link to="/paymentform" className="shoppingList__Text--sm shoppingList__btn  ">Proceed to checkout</Link>
                         <span  className="shoppingList__Text--sm  shoppingList__vr">|</span>
                    <p className="shoppingList__Text--sm shoppingList__btn ">Delete</p>
                </div>
            </div>
        </React.Fragment>
      );
}
 
export default ShoppingListItem;