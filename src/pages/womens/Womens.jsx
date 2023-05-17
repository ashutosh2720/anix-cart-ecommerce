import React from 'react'
import Product from '../../components/product/Product'
import '../home/main.css';


const Womens = () => {
    return (
        <>
            <Product
                category='womens-dresses'
                title='womens dresses'
            />
            <Product
                category='womens-shoes'
                title='womens shoes'
            />
            <Product
                category='womens-jewellery'
                title='womens jewellery'
            />

        </>
    )
}

export default Womens
