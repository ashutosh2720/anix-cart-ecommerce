import React from 'react'
import Product from '../../components/product/Product'
import '../home/main.css';


const Mens = () => {
    return (
        <>
            <Product
                category='mens-watches'
                title='Mens Watches'
            />
            <Product
                category='mens-shoes'
                title='Mens Shoes'
            />
            <Product
                category='mens-shirts'
                title='Mens shirt'
            />

        </>
    )
}

export default Mens
