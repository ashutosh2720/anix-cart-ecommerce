import React, { useEffect, useState } from 'react';
import '../../pages/home/main.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Skeleton from '@mui/material/Skeleton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';


const Product = ({ category, title }) => {

    const [Items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)




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
                loading ? (<div className='loading' >
                    <div> <Skeleton variant="rectangular" width={250} height={170} />
                        <Skeleton width="90%" />
                        <Skeleton width="70%" />
                        <Skeleton width="20%" />

                    </div>
                    <div>  <Skeleton variant="rectangular" width={250} height={170} />
                        <Skeleton width="90%" />
                        <Skeleton width="70%" />
                        <Skeleton width="20%" />
                    </div>
                    <div> <Skeleton variant="rectangular" width={250} height={170} />
                        <Skeleton width="90%" />
                        <Skeleton width="70%" />
                        <Skeleton width="20%" />
                    </div>
                    <div>  <Skeleton variant="rectangular" width={250} height={170} />
                        <Skeleton width="90%" />
                        <Skeleton width="70%" />
                        <Skeleton width="20%" />
                    </div>
                    <div>  <Skeleton variant="rectangular" width={250} height={170} />
                        <Skeleton width="90%" />
                        <Skeleton width="70%" />
                        <Skeleton width="20%" />
                    </div>



                </div>) : (<div className="items">
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
                                    <button className='add-to-cart' ><b><p>add to cart</p></b></button>
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
