import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import * as wishlistService from '../../services/wishlistService';


const ShoppingListItem = (props) => {

    const [wishlists,setWishlists]=useState([]);

    useEffect(()=>{

        async function fetchWishlist(){
            const {data:{wishlist}} = await wishlistService.getAllWishlist();
            setWishlists(wishlist);
           }
           fetchWishlist()
           },[])    
  

    return (
        <React.Fragment>


             {wishlists.map( wishlist => (   
            <div className="shoppingList">
                    
                <div className="shoppingList__main-container">

              <div className="shoppingList__img"></div>
              <div className="shoppingList__mainInfo">
                  <p  className="shoppingList__Text--lg">{wishlist.title} </p>
                  <p className="shoppingList__Text--colored">${wishlist.payment}</p>
                  <div>
                  <span className="shoppingList__Text--sm  ">Duration :{wishlist.duration} </span><br/>
                  </div>
                  <span className="shoppingList__Text--sm ">Sold by : </span>
                  <span className="shoppingList__Text--sm shoppingList__Text--span">{wishlist.instructorId.fullName}</span>
                
             </div>
              
                </div>
                <hr className="shoppingList__hr"></hr>
                <div className="shoppingList__btnContainer">
                <Link to="/paymentform" className="shoppingList__Text--sm shoppingList__btn  ">Proceed to checkout</Link>
                         <span  className="shoppingList__Text--sm  shoppingList__vr">|</span>
                    <p className="shoppingList__Text--sm shoppingList__btn ">Delete</p>
                </div>
            </div>

             ))} 

        </React.Fragment>
      );
}
 
export default ShoppingListItem;