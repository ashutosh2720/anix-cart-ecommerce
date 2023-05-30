import React from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import './Checkout.css'
import { useGlobalCart } from '../../contexts/cart-context';
import Addresses from '../../components/addresses/Addresses';

function Checkout() {
    const { cartArray, addresses, editAddress, deleteAddress, formData, saveAddress, handleInputChange, editIndex, addAddress, add, setAdd } = useGlobalCart()
    const totalPrice = cartArray.length > 0 ? cartArray.reduce((acc, cur) => acc + cur.price * cur.qty, 0) : null

    const navigate = useNavigate();
    return (
        <div className='main-checkout'>
            <div className="address">
                <h1>address</h1>
                <button className='add-new-address' onClick={() => { navigate('/addresses') }}>add new address</button>
                {
                    addresses.map((address, index) =>
                        <div className='addres' >
                            <p>Name : {address.name}</p>
                            <p>Mobile : {address.mobile}</p>
                            <p>Pin Code : {address.pinCode}</p>
                            <p>City : {address.city}</p>
                            <p>Address : {address.address}</p>

                            <div className="updated-address">
                                <button className='edit-address' onClick={() => { navigate('/addresses') }} >Edit</button>
                                <button className='delete-address' style={{ backgroundColor: 'red' }} onClick={() => deleteAddress(index)}>delete</button>
                            </div>

                        </div>)
                }
            </div>
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
