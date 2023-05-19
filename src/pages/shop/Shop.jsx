import React from 'react'
import Product from '../../components/product/Product'
import '../home/main.css';




const Shop = () => {
    const categories = [
        "smartphones",
        "laptops",
        "tops",
        "womens-shoes",
        "fragrances",
        "skincare",
        "groceries",
        "home-decoration",
        "furniture",
        "womens-dresses",
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
    return (
        <>
            {
                categories.map((item) =>
                    <Product
                        category={item}
                        title={item}
                    />)
            }

        </>
    )
}

export default Shop
