import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useGlobalLogin } from "./login-context";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlistArray, setWishlistArray] = useState([]);
    const { notifySuccess } = useGlobalLogin()

    const addToWishlist = async (product) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/user/wishlist`,
                { product },
                { headers: { authorization: encodedToken } }
            );
            setWishlistArray(data.wishlist);
            notifySuccess('Added to Wishlist')
        } catch (err) {
            console.log(err);
        }
    };

    const deleteFromWishlist = async (id) => {
        const encodedToken = localStorage.getItem('anixCartUserToken')
        try {
            const { data } = await axios.delete(`/api/user/wishlist/${id}`, {
                headers: { authorization: encodedToken }
            })

            setWishlistArray(data.wishlist)
            notifySuccess('Deleted from Wishlist')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <wishlistContext.Provider
            value={{
                wishlistArray,
                setWishlistArray,
                addToWishlist,
                deleteFromWishlist,
            }}
        >
            {children}
        </wishlistContext.Provider>
    );
};

const useGlobalWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useGlobalWishlist };
