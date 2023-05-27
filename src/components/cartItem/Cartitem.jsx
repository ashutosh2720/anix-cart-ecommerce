import React, { useState, useEffect } from "react";
import "./CartItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalCart } from "../../contexts/cart-context";
import axios from "axios";

const Cartitem = ({ product }) => {
    const { deleteFromCart } = useGlobalCart();

    return (
        product && (
            <>
                <div className="cart">
                    <div className="cart-item">
                        <FavoriteIcon style={{ position: 'relative', top: '-80px', cursor: 'pointer' }} />
                        <img src={product.thumbnail} alt="" style={{ height: '180px' }} />
                        <div className="cart-item-detail">
                            <p><b>{product.title.slice(0, 12)}...</b>
                            </p>
                            <p> Price : {product.price}</p>
                            <p>Stock : {product.stock}</p>
                            <p>quantity : </p>
                            <button className="remove-cart" ><DeleteIcon /><b style={{ position: 'relative', bottom: '5px' }} >Remove</b></button>
                        </div>

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
