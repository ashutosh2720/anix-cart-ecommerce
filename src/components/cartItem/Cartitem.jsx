import React, { useState, useEffect } from 'react'
import './CartItem.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalCart } from '../../contexts/cart-context';
import axios from 'axios';


const Cartitem = ({ item }) => {

    const { deleteFromCart } = useGlobalCart();

    return (
        item &&
        <>
            <div className="cart-item">
                <div className="item2">
                    <div className="img "><img src={item.thumbnail} alt="" /></div>
                    <div className="tile ">{item.title}</div>
                    <div className="quantity"><select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select></div>
                    <div className="price ">&#8377;1{item.price}</div>

                    <div className="delete" onClick={() => deleteFromCart(item._id)}><DeleteIcon /></div>
                </div>



            </div>
        </>

        // onClick={() => deleteCart(cartProduct.id)}
    )
}

export default Cartitem;
