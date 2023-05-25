import React from "react";
import "./cart.css";
import { useGlobalCart } from "../../contexts/cart-context";
import ProductCard from "../../components/productCard/ProductCard";

function WishlistPage() {
    const { cartArray } = useGlobalCart()

    return (
        <>
            <div className="main">
                <div className="header">
                    <h2>Cart page</h2>
                </div>

                <div className="main-cart-item">
                    {cartArray.map((product) => {
                        return <ProductCard product={product} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default WishlistPage;
