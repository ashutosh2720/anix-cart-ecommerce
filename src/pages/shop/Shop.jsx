import React, { useState } from 'react'
import Product from '../../components/product/Product'
import '../home/main.css';
import { useEffect } from 'react';
import { useGlobalProducts } from '../../contexts/productContext';

const Shop = () => {
    const { productLoading, products } = useGlobalProducts()

    return (
        <>
            <Product
                category={''}
                title={''}
                products={products}
                productLoading={productLoading}
            />

        </>
    )
}

export default Shop
