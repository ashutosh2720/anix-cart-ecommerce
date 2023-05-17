import React from 'react'
import Product from '../../components/product/Product'
import '../home/main.css';


const Electronics = () => {
    return (
        <>
            <Product
                category='laptops'
                title='laptops'
            />
            <Product
                category='smartphones'
                title='smartphones'
            />
            <Product
                category='lighting'
                title='lighting'
            />

        </>
    )
}

export default Electronics
