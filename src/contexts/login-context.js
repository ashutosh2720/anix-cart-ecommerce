import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginContext = createContext();

const LoginProvider = ({ children }) => {
    const [userToken, setUserToken] = useState();
    const [userDetail, setUserDetail] = useState();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const toastify = {
        position: "top-right",
        autoClose: 600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };

    const notifyInfo = (content) => toast.info(content, toastify);
    const notifySuccess = (content) => toast.success(content, toastify);
    const notifyWarn = (content) => toast.warn(content, toastify);
    const notifyError = (content) => toast.error(content, toastify);

    useEffect(() => {
        let token = localStorage.getItem("anixCartUserToken");
        if (token) {
            setUserToken(token);
            let userId = localStorage.getItem("userId");
        }
    }, [userToken]);

    const dummyData = {
        email: "ashutosh@gmail.com",
        password: "ashutosh",
    };
    const userLogin = async () => {
        try {
            let { data, status } = await axios.post("/api/auth/login", {
                email: input.email,
                password: input.password,
            });
            if (status === 200) {
                localStorage.setItem(
                    "anixCartUserToken",
                    JSON.stringify(data.encodedToken)
                );
                localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
                setUserToken(data.encodedToken);
                setUserDetail(data.foundUser);
                notifySuccess("Login Successfully");
            }
        } catch (err) {
            console.log(err);
            if (err.response.status === 404) {
                notifyError("User not found");
            } else if (err.response.status === 401) {
                notifyError("Invalid Credential");
            }
        }
    };

    const loginAction = (event) => {
        event.preventDefault();
        userLogin();
        setInput({
            userName: "",
            password: "",
        });
    };

    const logoutUser = () => {
        localStorage.removeItem("anixCartUserToken");
        localStorage.removeItem("userId");
        setUserToken("");
        setUserDetail("");
        notifyInfo("Logout Successfull!");
    };

    return (
        <loginContext.Provider
            value={{
                input,
                setInput,
                dummyData,
                loginAction,
                userToken,
                logoutUser,
                userDetail,
                notifyInfo,
                notifySuccess,
                notifyWarn,
                notifyError
            }}
        >
            {children}
        </loginContext.Provider>
    );
};

const useGlobalLogin = () => useContext(loginContext);

export { LoginProvider, useGlobalLogin };
