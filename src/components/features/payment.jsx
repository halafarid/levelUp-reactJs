import  React, {useState,useEffect} from 'react';
import ShoppingListItem from '../cards/shoppingListItem';
import PaymentCard from '../cards/paymentCard';
import * as wishlistService from '../../services/wishlistService';
import PageNoResult from './../core/pageNoResult';

const Payment = (props) => {
    const [wishlists,setWishlists]=useState([]);

    useEffect(()=>{
        async function fetchWishlist(){
            const {data:{wishlist}} = await wishlistService.getAllWishlist();
            setWishlists(wishlist);
        }
        fetchWishlist()
    },[])    

    const deleteWishlist = async id => {
        await wishlistService.handleWishlist(id).then(data => setWishlists(wishlists.filter( wishlist => wishlist._id !== id )));
    }

    return ( 
        <React.Fragment>
            <div className="paymentCardsContainer">
            <div className="paymentCardsContainer__sub">
                {wishlists.length > 0 ?
                    wishlists.map(wishlist=> <ShoppingListItem key={wishlist._id} wishlist={wishlist} deleteWishlist={deleteWishlist} />)
                :
                    <PageNoResult />
                }
            </div>
                <PaymentCard wishlists={wishlists} />
            </div>
        </React.Fragment>
    );
}
 
export default Payment;