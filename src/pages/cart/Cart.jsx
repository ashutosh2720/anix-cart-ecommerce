import React from 'react'

import './cart.css'
import Cartitem from '../Components/cart/Cartitem';
import { useGlobalCart } from '../context/cart-context';


export default function Cart() {

    const { cartArray, addToCart } = useGlobalCart();

    return (
        <>
            <div className="main">
                <div className="header">
                    <h2>Shoping Cart</h2>
                </div>

                <div className="main-cart-item">

                    {
                        cartArray.map((cartId) => {
                            return <Cartitem cartId={cartId} />
                        })
                    }


                </div>


            </div>
        </>
    )
}
