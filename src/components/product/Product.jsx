import React, { useEffect, useState } from 'react';
import '../../pages/home/main.css';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Skeleton from '@mui/material/Skeleton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';
import Loading from '../skelton/Loading';
import { useGlobalCart } from '../../contexts/cart-context';


const Product = ({ category, title }) => {

    const [Items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)
    const { addToCart } = useGlobalCart()




    const getApiData = async () => {
        setLoading(true)
        try {
            let response = await fetch(`/api/category/${category}`);
            let data = await response.json();
            setItems(data.products);

        }
        catch (err) {
            console.log(err)
        }
        setLoading(false)

    }


    useEffect(() => {
        getApiData()
    }, [])


    return (
        <>




            {
                loading ? (
                    <Loading />
                ) : (<div className="items">
                    {Items?.map((val) => {
                        return (

                            <div  >
                                <FavoriteIcon className='fav' />

                                <div className="img-details">
                                    <NavLink to={'/single-product/' + val._id}>

                                        <div className="product-img">
                                            <img src={val.thumbnail} alt="" />
                                        </div>
                                        <div className="ind-item">
                                            <p>{val.title.slice(0, 25)}...</p>
                                            <h3>&#8377;1{val.price}/-</h3>
                                            <Rating name="read-only" value={val.rating} readOnly precision={0.1} />


                                        </div>
                                    </NavLink>
                                    <button className='add-to-cart' onClick={() => addToCart(val)} ><AddShoppingCartIcon /><b><p style={{ display: 'inline', position: 'relative', bottom: '5px' }} >add to cart</p></b></button>
                                </div>

                            </div>
                        )
                    })


                    }

                </div>)

            }

        </>
    )

}

export default Product;
