import React from 'react'
import { useGlobalWishlist } from '../../contexts/wishlist-context';
import { useGlobalCart } from '../../contexts/cart-context';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { addToCart } = useGlobalCart();
    const { addToWishlist, wishlistArray, deleteFromWishlist } = useGlobalWishlist();

    return (
        <div className='product-card'>
            <FavoriteIcon
                className="fav"
                onClick={() => wishlistArray.find(({ _id }) => _id === product._id) ? deleteFromWishlist(product._id) : addToWishlist(product)}

                style={{
                    color: wishlistArray.find(({ _id }) => _id === product._id)
                        ? "red"
                        : "rgba(0,0,0,0.3)",
                }}
            />
            <div className="img-details">
                <NavLink to={"/single-product/" + product._id}>
                    <div className="product-img">
                        <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="ind-item">
                        <p>{product.title.slice(0, 25)}...</p>
                        <h3>&#8377;1{product.price}/-</h3>
                        <Rating
                            name="read-only"
                            value={product.rating}
                            readOnly
                            precision={0.1}
                        />
                    </div>
                </NavLink>
                <Button
                    variant="contained"
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                >
                    {" "}
                    <AddShoppingCartIcon />
                    <p> add to cart</p>
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
