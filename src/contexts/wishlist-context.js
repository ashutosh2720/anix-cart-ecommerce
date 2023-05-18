

import React, { createContext, useContext, useState } from "react";
import axios from 'axios'

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {

    const [wishlistArray, setWishlistArray] = useState([]);


    const addToWishlist = async (product) => {
        const encodedToken = localStorage.getItem("anixCartUserToken")
        try {
            const { data } = await axios.post(`/api/user/cart`, { product }, { headers: { authorization: encodedToken } })
            console.log(data)
        }
        catch (err) {

        }
    }


    const deleteFromWishlist = (id) => {

        setWishlistArray(
            wishlistArray.filter((val) => {
                return val !== id
            })
        )
    }





    return (
        <wishlistContext.Provider value={{ wishlistArray, setWishlistArray, addToWishlist, deleteFromWishlist }}>
            {children}
        </wishlistContext.Provider>
    )
}

const useGlobalCart = () => useContext(wishlistContext);

export { WishlistProvider, useGlobalCart };