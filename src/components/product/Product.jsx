import React, { useEffect, useState } from 'react';
import '../../pages/home/main.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';

const Product = ({ category, title }) => {

    const [Items, setItems] = useState([]);




    const getApiData = async () => {
        let response = await fetch(`/api/category/${category}`);
        let data = await response.json();
        setItems(data.products);
        console.log(Items)
    }


    useEffect(() => {
        getApiData()
    }, [])


    return (
        <>
            {/* <div className="deal"><h1>{title}</h1></div> */}

            <div className="items">
                {
                    Items ?
                        Items?.map((val) => {
                            return (
                                <NavLink to={'/single-product/' + val._id}>
                                    <div className="img-details">
                                        <div className="product-img">
                                            <img src={val.thumbnail} alt="" />
                                        </div>
                                        <div className="ind-item">
                                            <h4>{val.title.slice(0, 25)}...</h4>
                                            <h3>&#8377;1{val.price}/-</h3>
                                            <Rating name="read-only" value={val.rating} readOnly precision={0.1} />

                                        </div>
                                    </div>
                                </NavLink>
                            )
                        }) :
                        <div className="">Loading</div>

                }
                {/* <div className="all"><h4>view all</h4></div> */}
            </div>

        </>
    )
}

export default Product;
