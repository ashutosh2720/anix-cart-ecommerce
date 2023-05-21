import React from "react";
import "./Wishlist.css";
import Cartitem from "../../components/cartItem/Cartitem";
import { useGlobalCart } from "../../contexts/cart-context";
import { useGlobalWishlist } from "../../contexts/wishlist-context";
import WishlistItem from "../../components/WishlistItem/WishlistItem";

function WishlistPage() {
    const { wishlistArray } = useGlobalWishlist()

    return (
        <>
            <div className="main">
                <div className="header">
                    <h2>Wishlist Page</h2>
                </div>

                <div className="main-wishlist-item">
                    {wishlistArray.map((product) => {
                        return <WishlistItem product={product} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default WishlistPage;
