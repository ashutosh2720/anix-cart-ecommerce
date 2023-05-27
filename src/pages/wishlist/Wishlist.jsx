import React from "react";
import "./Wishlist.css";
import { useGlobalWishlist } from "../../contexts/wishlist-context";
import ProductCard from "../../components/productCard/ProductCard";

function WishlistPage() {
    const { wishlistArray } = useGlobalWishlist()

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
                    <img src="https://www.divinestuff.co.in/images/wishlist-empty.png" alt="" style={{ height: '500px', width: '600px' }} />
                </div>}
            </div>
        </>
    );
}

export default WishlistPage;
