import React, { useState } from 'react'
import Product from '../../components/product/Product'
import '../home/main.css';
import { useEffect } from 'react';

const Shop = () => {
    const [productLoading, setProductLoading] = useState(true);
    const [products, setProducts] = useState([])
    const categories = [
        "smartphones",
        "laptops",
        "tops",
        "womens-saaree",
        "womens-shoes",
        "fragrances",
        "skincare",
        "groceries",
        "home-decoration",
        "furniture",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
        "automotive",
        "motorcycle",
        "lighting"
    ]

    const getApiData = async () => {
        try {
            let response = await fetch(`/api/products`);
            let data = await response.json();
            setProducts(data.products);
        }
        catch (err) {
            console.log(err)
        } finally {
            setProductLoading(false)
        }
    }

    useEffect(() => {
        getApiData()
    }, [])

    return (
        <>
            <Product
                category={''}
                title={''}
                products={products}
                productLoading={productLoading}
            />
            {/* {
                products.map((product) =>
                    <Product
                        category={item}
                        title={item}
                        product={product}
                    />)
            } */}

        </>
    )
}

export default Shop
