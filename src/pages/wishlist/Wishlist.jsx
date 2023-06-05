import React from "react";
import "./Wishlist.css";
import { useGlobalWishlist } from "../../contexts/wishlist-context";
import { useGlobalCart } from "../../contexts/cart-context";
import ProductCard from "../../components/productCard/ProductCard";

function WishlistPage() {
    const { wishlistArray } = useGlobalWishlist()
    const { cartArray } = useGlobalCart();


    return (
        <>
            <div className="main">
                <div className="header">
                    <h2> My Wishlist</h2>
                </div>

                {wishlistArray.length !== 0 ? <div className="main-wishlist-item">
                    {wishlistArray.map((product) => {
                        return <ProductCard product={product} />;
                    })}
                </div> : <div className="empty-wishlist">
                    <img src="https://www.divinestuff.co.in/images/wishlist-empty.png" alt="" style={{ maxHeight: '500px', maxWidth: '100%' }} />
                </div>}
            </div>
        </>
    );
}

export default WishlistPage;
