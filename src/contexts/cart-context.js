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

    const deleteFromCart = async (id) => {
        const encodedToken = localStorage.getItem('anixCartUserToken')
        try {
            const { data } = await axios.delete(`/api/user/cart/${id}`, {
                headers: { authorization: encodedToken }
            })

            setCartArray(data.cart)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <cartContext.Provider value={{ cartArray, setCartArray, addToCart, deleteFromCart }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };