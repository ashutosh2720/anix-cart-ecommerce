// import { NavLink } from "react-router-dom";
import './Nav.css'
import Menu from '../../components/menu/Menu'
import Sign from '../../pages/signin/Sign'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChairIcon from '@mui/icons-material/Chair';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Man2Icon from '@mui/icons-material/Man2';
import Woman2Icon from '@mui/icons-material/Woman2';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Badge from '@mui/material/Badge';
import logo from '../../Images/anix4.png'
import { NavLink } from 'react-router-dom';
import { useGlobalCart } from "../../contexts/cart-context";
import { useState } from 'react';
function Navbar() {
    const { cartArray } = useGlobalCart()

    const [showMenu, setShowMenu] = useState(false);
    const [showLog, setLog] = useState(false);



    const menuFunction = () => {
        setShowMenu(!showMenu)
    }


    const logFunction = () => {
        setLog(!showLog)
    }
    return <>
        {
            showMenu
            &&
            <Menu menuFunction={menuFunction} />
        }

        {
            showLog
            &&
            <div onClick={logFunction}>
                <Sign />
            </div>

        }

        <nav>

            <div className="nav-mid">
                <ShoppingCartOutlinedIcon fontSize="large" /> <img src={logo} alt="img" />


            </div>

            <div className="search">
                <input type="search" name="" id="" placeholder="search here..." />
            </div>


            <div className="nav-right">

                <div className="icons">


                    <div className="img4" >
                        <NavLink to='/sign'>
                            <PersonAddAltSharpIcon />
                        </NavLink>

                    </div>


                    <div className="img4">
                        <NavLink to='/wishlist'>

                            <FavoriteSharpIcon />

                        </NavLink>
                    </div>

                    <div className="img3">
                        <NavLink to='/Cart'>
                            <Badge badgeContent={cartArray.length} color="success">
                                <ShoppingCartIcon className="cart-icon" />
                            </Badge>
                        </NavLink>
                    </div>
                </div>


            </div>


        </nav>

        <div className="navigation">
            <ul>

                <div className="img-name" onClick={menuFunction} >
                    <MenuIcon />
                    Menu
                </div>
                <div className="home"><li>

                    <NavLink to='/'>


                        <HomeIcon />Home
                    </NavLink>

                </li></div>
                <div className="ments-wear"><li>

                    <NavLink to='/Mens'>
                        <Man2Icon />Mens

                    </NavLink>


                </li></div>

                <div className="womens-saare"><li>


                    <NavLink to='/Womens ' className={isActive =>
                        !isActive ? " active" : "inactive"
                    }>

                        <Woman2Icon fontSize="medium" />Womens

                    </NavLink>


                </li></div>
                <div className="home-appliance"> <li>


                    <NavLink to='/electronics'>


                        <LaptopMacIcon fontSize="medium" />
                        Electronics


                    </NavLink>



                </li></div>
            </ul>
        </div>

    </>
};
export default Navbar;