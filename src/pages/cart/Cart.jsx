import React from "react";
import "./cart.css";
import { useGlobalCart } from "../../contexts/cart-context";
import ProductCard from "../../components/productCard/ProductCard";
import Cartitem from "../../components/cartItem/Cartitem";

function WishlistPage() {
    const { cartArray } = useGlobalCart()

    return (
        <>
            <div className="main">
                <div className="header">
                    <h2>Cart page</h2>
                </div>

                <div className="main-cart-item">
                    <div> {cartArray.map((product) => {
                        return <Cartitem product={product} />;
                    })}</div>

                    <div className="checkout">
                        <h3>cart price detail</h3>
                        <p>total price : </p>
                        <p>cost</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WishlistPage;
