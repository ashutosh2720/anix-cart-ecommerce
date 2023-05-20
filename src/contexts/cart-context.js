import React, { createContext, useContext, useState } from "react";
import axios from 'axios'

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([]);


    const addToCart = async (product) => {
        const encodedToken = localStorage.getItem("anixCartUserToken")
        try {
            const { data } = await axios.post(`/api/user/cart`, { product }, { headers: { authorization: encodedToken } })
            setCartArray(data.cart)
        }
        catch (err) {
            console.log(err)
        }
    }

    console.log(cartArray)

    const deleteCart = (id) => {
        setCartArray(
            cartArray.filter((val) => {
                return val !== id
            })
        )
    }

    return (
        <cartContext.Provider value={{ cartArray, setCartArray, addToCart, deleteCart }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };