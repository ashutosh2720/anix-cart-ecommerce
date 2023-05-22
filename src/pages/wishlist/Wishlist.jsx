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
                    <h2>Wishlist Page</h2>
                </div>

                <div className="main-wishlist-item">
                    {wishlistArray.map((product) => {
                        return <ProductCard product={product} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default WishlistPage;
