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
                    <h2>My cart</h2>


                </div>
                {
                    cartArray.length === 0 ? <div className="empty-cart"  >
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="" />

                        <button>shop now </button>
                    </div> : <h2>{cartArray.length} items in cart </h2>
                }

                <div className="main-cart-item">
                    <div> {cartArray.map((product) => {
                        return <Cartitem product={product} />;
                    })}</div>

                    {cartArray.length !== 0 && <div className="checkout">
                        <h3>cart price detail</h3>
                        <p>total price : </p>
                        <p>cost</p>
                    </div>}
                </div>
            </div>
        </>
    );
}

export default WishlistPage;
