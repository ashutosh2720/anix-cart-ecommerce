import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useGlobalLogin } from "./login-context";
const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartArray, setCartArray] = useState([]);
    const { notifySuccess } = useGlobalLogin();
    // const [count, setCount] = useState(0);

    const addToCart = async (product) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/user/cart`,
                { product },
                { headers: { authorization: encodedToken } }
            );

            setCartArray(data.cart);
            notifySuccess("Item added to cart");
        } catch (err) {
            console.log(err);
        }
    };

    const deleteFromCart = async (id) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.delete(`/api/user/cart/${id}`, {
                headers: { authorization: encodedToken },
            });

            setCartArray(data.cart);
            notifySuccess(" Item deleted from cart");
        } catch (err) {
            console.log(err);
        }
    };

    const updateQuantity = async (actionType, id) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");

        console.log(id);
        try {


            const { data } = await axios.post(
                `/api/user/cart/${id}`,
                {
                    action: {
                        type: actionType
                    }
                },
                { headers: { authorization: encodedToken } }
            );
            setCartArray(data.cart);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <cartContext.Provider
            value={{
                cartArray,
                updateQuantity,
                setCartArray,
                addToCart,
                deleteFromCart,
            }}
        >
            {children}
        </cartContext.Provider>
    );
};

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };
