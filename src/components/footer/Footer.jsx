import React from "react";
import './Footer.css'
import logo from '../../Images/anix4.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CancelScheduleSendOutlinedIcon from '@mui/icons-material/CancelScheduleSendOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
export default function Footer() {

    let date = new Date().getFullYear()

    return (
        <>
            <div className="footer">
                <div className="about">

                    <ul>
                        <li><h2>About</h2></li>
                        <li><a href=""> <AddIcCallOutlinedIcon /> Contact Us</a></li>
                        <li><a href=""> <InfoOutlinedIcon /> About Us</a></li>
                        <li><a href=""> <MenuBookOutlinedIcon /> Anix Stories</a></li>



                    </ul>
                </div>
                <div className="help">
                    <ul>
                        <li><h2>Help</h2></li>
                        <li><a href="" > <AccountBalanceWalletOutlinedIcon /> Payment</a></li>
                        <li><a href=""> <LocalShippingOutlinedIcon /> Shipping</a></li>
                        <li><a href=""> <CancelScheduleSendOutlinedIcon /> Cancellation & Return</a></li>
                        <li><a href=""> <KeyboardReturnOutlinedIcon /> Return</a></li>
                    </ul>
                </div>
                <div className="policy">
                    <ul>
                        <li><h2>Policy</h2></li>
                        <li><a href=""> <KeyboardReturnOutlinedIcon />  Return Policy</a></li>
                        <li><a href=""> <GavelOutlinedIcon /> Terms & Use</a></li>
                        <li><a href=""> <SecurityOutlinedIcon />  Privecy</a></li>
                        <li><a href=""> <VpnKeyOutlinedIcon /> Security</a></li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <li><h2>Social</h2></li>
                        <li><a href=""> <FacebookIcon /> Facebook</a></li>
                        <li><a href=""> <TwitterIcon /> Twitter</a></li>
                        <li><a href=""> <InstagramIcon /> Instagram</a></li>
                        <li><a href=""> <GitHubIcon /> Github</a></li>
                    </ul>
                </div>


            </div>
            <div className="copy">
                <h4> &#169;Copyright {date}</h4>  <ShoppingCartOutlinedIcon fontSize="large" />  <img src={logo} alt="" />
            </div>

        </>
    )
}