import React, { useEffect, useState } from "react";
import "../../pages/home/main.css";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import Loading from "../skelton/Loading";
import { useGlobalCart } from "../../contexts/cart-context";
import { useGlobalWishlist } from "../../contexts/wishlist-context";

const Product = ({ products, productLoading }) => {
    const { addToCart } = useGlobalCart();
    const { addToWishlist, wishlistArray, deleteFromWishlist } = useGlobalWishlist();
    console.log(wishlistArray);

    return (
        <>
            {productLoading ? (
                <Loading />
            ) : (
                <div className="items">
                    {products?.map((val) => {
                        return (
                            <div>
                                <FavoriteIcon
                                    className="fav"
                                    onClick={() => wishlistArray.find(({ _id }) => _id === val._id) ? deleteFromWishlist(val._id) : addToWishlist(val)}

                                    style={{
                                        color: wishlistArray.find(({ _id }) => _id === val._id)
                                            ? "red"
                                            : "rgba(0,0,0,0.3)",
                                    }}
                                />
                                <div className="img-details">
                                    <NavLink to={"/single-product/" + val._id}>
                                        <div className="product-img">
                                            <img src={val.thumbnail} alt="" />
                                        </div>
                                        <div className="ind-item">
                                            <p>{val.title.slice(0, 25)}...</p>
                                            <h3>&#8377;1{val.price}/-</h3>
                                            <Rating
                                                name="read-only"
                                                value={val.rating}
                                                readOnly
                                                precision={0.1}
                                            />
                                        </div>
                                    </NavLink>
                                    <Button
                                        variant="contained"
                                        className="add-to-cart"
                                        onClick={() => addToCart(val)}
                                    >
                                        {" "}
                                        <AddShoppingCartIcon />
                                        <p> add to cart</p>
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Product;
