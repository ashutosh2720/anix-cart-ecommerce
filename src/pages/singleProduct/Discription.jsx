import { LineAxisOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import '../singleProduct/Discription.css'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PercentIcon from '@mui/icons-material/Percent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import DiscountIcon from '@mui/icons-material/Discount';
import { useGlobalCart } from '../../contexts/cart-context'


export default function Discription() {

    const [productDetail, setProductDetail] = useState();
    const [mainImage, setMainImage] = useState(null)

    const { cartArray, addToCart } = useGlobalCart();

    const navigate = useNavigate();

    const { id } = useParams();




    const getProductDetail = async (id) => {
        let res = await fetch(`/api/products/${id}`)
        let data = await res.json();
        setProductDetail(data.product);
        setMainImage(data?.product?.thumbnail)
        console.log(productDetail)
    }

    useEffect(() => {
        getProductDetail(id);
    }, [])


    return (
        productDetail
        &&
        <>
            <div className="header">
                <div className="heading">

                </div>
            </div>

            <div className="main-dis">
                <div className="left-dis">
                    <FavoriteIcon className='des-fav' />
                    <div className="left">
                        {
                            productDetail.images.map((img) => {
                                return (
                                    <img onMouseOver={() => setMainImage(img)} src={img} alt="" className='prev-img' />
                                )

                            })
                        }

                    </div>

                    <div className="main-img">
                        <img src={mainImage} alt="" />

                    </div>


                </div>



                <div className="right-dis">
                    <div className="dis">
                        <div className='title'>

                            <h1>{productDetail.title}</h1>
                            <p><b>Brand </b>:  {productDetail.brand}</p>
                            <p><b>Description</b>     :   {productDetail.description}</p>
                            <p> <Rating name="read-only" value={productDetail.rating} readOnly precision={0.1} className='rating' /></p>
                            <h2>Deal of the day</h2>
                            <span style={{ color: 'red' }}> <s><h3>1167</h3></s></span>


                            <h1 style={{ color: 'green' }} >&#x20B9;1{productDetail.price}/-</h1>




                        </div>

                        <div className="offer">
                            <div>

                                <h2><DiscountIcon className='percent' />Offers</h2>
                                <p> <LocalOfferIcon className='off' />Bank Offer
                                    5% Cashback on Flipkart Axis Bank Card
                                    T&C</p>
                                <p><LocalOfferIcon className='off' />Buy this Product and Get Extra ₹500 Off on Two-Wheelers
                                    T&C</p>
                                <p><LocalOfferIcon className='off' />Partner Offer
                                    Purchase now & get a surprise cashback coupon for January / February 2023
                                    Know More</p>
                                <p ><LocalOfferIcon className='off' />Partner Offer
                                    Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000*
                                    Know More</p>
                            </div>

                        </div>
                        <div className="btn-1"> {
                            cartArray.find((item) => item._id === productDetail._id)
                                ?
                                <button className='button-52' onClick={() => { navigate('/Cart') }} >
                                    <ShoppingCartCheckoutIcon fontSize='large' /> Go To Cart
                                </button> :
                                <button className='button-52' onClick={() => addToCart(productDetail)}> <AddShoppingCartIcon fontSize='large' />  <b>Add To Cart</b>
                                </button>

                        }
                            <button className='button-52'> <FavoriteBorderIcon fontSize='large' /> Add to wishlist</button>
                        </div>

                    </div>



                </div>

            </div>

            <hr />

        </>
    )
}
