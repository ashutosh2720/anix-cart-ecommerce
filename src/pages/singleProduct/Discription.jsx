import { LineAxisOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import '../singleProduct/Discription.css'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PercentIcon from '@mui/icons-material/Percent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DiscountIcon from '@mui/icons-material/Discount';
import { useGlobalCart } from '../../contexts/cart-context'


export default function Discription() {

    const [productDetail, setProductDetail] = useState();

    const { cartArray, addToCart } = useGlobalCart();

    const navigate = useNavigate();

    const { id } = useParams();


    const getProductDetail = async (id) => {
        let res = await fetch(`/api/products/${id}`)
        let data = await res.json();
        setProductDetail(data.product);
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
                    <div className="left">
                        {
                            productDetail.images.map((img) => {
                                return (
                                    <img src={img} alt="" />
                                )

                            })
                        }

                    </div>

                    <div className="main-img">
                        <img src={productDetail.thumbnail} alt="" />

                    </div>


                </div>



                <div className="right-dis">
                    <div className="dis">
                        <div className='title'>

                            <h1>{productDetail.title}</h1>
                            <h3><b>Brand </b>:  {productDetail.brand}</h3>
                            <h4><b>Description</b>     :   {productDetail.description}</h4>
                            <h2>Deal of the day</h2>
                            <span><s><h3>1167</h3></s><h1>&#x20B9;1{productDetail.price}/-</h1></span>


                        </div>

                        <div className="offer">
                            <div>

                                <h2><DiscountIcon className='percent' />Offers</h2>
                                <h4> <LocalOfferIcon className='off' />Bank Offer
                                    5% Cashback on Flipkart Axis Bank Card
                                    T&C</h4>
                                <h4><LocalOfferIcon className='off' />Buy this Product and Get Extra ₹500 Off on Two-Wheelers
                                    T&C</h4>
                                <h4><LocalOfferIcon className='off' />Partner Offer
                                    Purchase now & get a surprise cashback coupon for January / February 2023
                                    Know More</h4>
                                <h4 ><LocalOfferIcon className='off' />Partner Offer
                                    Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000*
                                    Know More</h4>
                            </div>

                        </div>
                        <div className="btn-1"> {
                            cartArray.includes(productDetail.id) ?
                                <button className='button-52' onClick={() => { navigate('/Cart') }} > <ShoppingCartCheckoutIcon fontSize='large' /> Go To Cart</button> :
                                <button className='button-52' onClick={() => addToCart(productDetail.id)}> <AddShoppingCartIcon fontSize='large' />  <b>Add To Cart</b></button>

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
