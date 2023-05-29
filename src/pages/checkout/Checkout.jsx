import React from 'react'
import { Link } from "react-router-dom";
import './Checkout.css'
import { useGlobalCart } from '../../contexts/cart-context';
import Addresses from '../../components/addresses/Addresses';

function Checkout() {
    const { cartArray, } = useGlobalCart()
    const totalPrice = cartArray.length > 0 ? cartArray.reduce((acc, cur) => acc + cur.price * cur.qty, 0) : null
    return (
        <div className='main-checkout'>

            <Addresses />
            <div className="check-out">
                <h3>cart price detail</h3>
                <hr style={{ width: '100%' }} />

                {cartArray.map((item) =>
                    <p>{item.title.slice(0, 20)} ({item.qty})</p>)}
                <hr style={{ width: '100%' }} />
                <h3>total price : {totalPrice}</h3>
                <Link to={'/checkout'}>
                    <button className="checkout-btn"><h4>checkout</h4></button>
                </Link>
            </div>
        </div>
    )
}

export default Checkout;
