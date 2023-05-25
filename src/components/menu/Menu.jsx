import React from "react";
import './menu.css';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ViewListIcon from '@mui/icons-material/ViewList';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useGlobalLogin } from "../../contexts/login-context";
import { NavLink, useNavigate } from "react-router-dom";


export default function Menu({ menuFunction }) {

    const { userToken, logoutUser, userDetail } = useGlobalLogin()

    const navigate = useNavigate();

    const logoutAction = () => {
        logoutUser()
        menuFunction()
    }

    return (
        <>
            <div className="main-menu">
                <div className="menu-left">
                    <div className="close-menu" onClick={menuFunction}>
                        <HighlightOffIcon />
                    </div>
                    <div className="welcome">
                        <h1><AccountCircleIcon className="user" />hello👋{userDetail ? userDetail.firstName : "user"}</h1>
                    </div>
                    <div className="order">
                        <ul>
                            <h2>Order</h2><br /><br />
                            <li onClick={menuFunction}><ViewListIcon />Order Summary</li>
                            <li onClick={menuFunction}><AssignmentReturnIcon />Return</li>
                            <li onClick={menuFunction}><ViewModuleIcon />My Order</li>
                            <li onClick={menuFunction}><FavoriteBorderIcon />My Wishlist</li>

                        </ul>
                    </div><hr />

                    <div className="payment">
                        <ul>
                            <h2>Payments</h2><br /><br />
                            <li onClick={menuFunction}><PaymentIcon />Payment History</li>
                            <li onClick={menuFunction}><AccountBalanceWalletIcon />Payment Refund</li>
                        </ul>
                    </div><hr />

                    <div className="hellp">
                        <ul>
                            <h2>Help & Setting</h2><br /><br />
                            <li onClick={menuFunction}><ManageAccountsIcon />My Account</li>
                            <li onClick={menuFunction}><SupportAgentIcon />Costumer Support</li>
                            {
                                userToken ?
                                    <li onClick={logoutAction}><LogoutIcon /> Log Out</li> :
                                    <NavLink to='/sign'>
                                        <li onClick={menuFunction}><LoginIcon />Log In</li>
                                    </NavLink>
                            }
                        </ul>
                    </div>
                </div>
                <div className="menu-right" onClick={menuFunction}>

                </div>
            </div>
        </>
    )
}