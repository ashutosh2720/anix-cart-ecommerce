import React from 'react'

import './cart.css'
import Cartitem from '../../components/cartItem/Cartitem';
import { useGlobalCart } from '../../contexts/cart-context';


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
                        cartArray.map((item) => {
                            return <Cartitem item={item} />
                        })
                    }


                </div>


            </div>
        </>
    )
}
