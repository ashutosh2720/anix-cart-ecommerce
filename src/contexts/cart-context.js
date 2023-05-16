

import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([]);


    const addToCart = (id) => {
        if (cartArray.includes(id)) {

        }
        else
            setCartArray((oldData) => {
                return [id, ...oldData]
            }
            )
    }


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