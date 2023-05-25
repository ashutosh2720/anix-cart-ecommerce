import React, { useState, useEffect } from "react";
import "./CartItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGlobalCart } from "../../contexts/cart-context";
import axios from "axios";

const Cartitem = ({ item }) => {
    const { deleteFromCart } = useGlobalCart();

    return (
        item && (
            <>
                <div className="cart">
                    <div className="cart-item">
                        <img src={item.thumbnail} alt="" style={{ height: '100px' }} />
                        <div className="cart-item-detail">
                            <p>{item.title}</p>
                            <p> Price : {item.price}</p>
                            <p>Stock : {item.stock}</p>
                        </div>

                    </div>
                    <div className="checkout">

                    </div>
                </div>
            </>
        )

        // onClick={() => deleteCart(cartProduct.id)}
    );
};

export default Cartitem;

{
    /* <div className="delete" onClick={() => deleteFromCart(item._id)}>
                          <DeleteIcon />
                      </div> */
}
