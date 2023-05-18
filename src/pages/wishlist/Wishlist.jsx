import React from 'react';
import './Wishlist.css';
import Cartitem from '../../components/cartItem/Cartitem';
import { useGlobalCart } from '../../contexts/cart-context';

function WishlistPage() {

    const { cartArray, addToCart } = useGlobalCart();



    return <>

        <div className="main">
            <div className="header">
                <h2>Wishlist Page</h2>
            </div>

            <div className="main-wishlist-item">

                {
                    cartArray.map((cartId) => {
                        return <Cartitem cartId={cartId} />
                    })
                }


            </div>


        </div>
    </>

}



export default WishlistPage;
