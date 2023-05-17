import React from 'react'
import Product from '../../components/product/Product'
import '../home/main.css';


const Womens = () => {
    return (
        <>
            <Product
                category='tops'
                title='girls tops'
            />
            <Product
                category='womens-saaree'
                title='womens-saaree'
            />
            <Product
                category='womens-shoes'
                title='womens-watches'
            />

        </>
    )
}

export default Womens
