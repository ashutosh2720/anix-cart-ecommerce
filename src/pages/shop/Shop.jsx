import React, { useState } from "react";
import Product from "../../components/product/Product";
import "../home/main.css";
import "./Shop.css";
import { useEffect } from "react";
import { useGlobalProducts } from "../../contexts/productContext";

const Shop = () => {
    const { productLoading, products } = useGlobalProducts();

    return (
        <>
            <div className="product">
                <div className="filter">
                    <div className="filter-header">
                        <h3>filter</h3>
                        <button className="clear">clear</button>

                    </div>
                    <hr style={{ width: '100%' }} />

                    <div className="filter-by-price">
                        <h3>price</h3>
                        <input type="range" name="" id="" max="2000" min="0" style={{ width: "200px" }} />
                    </div>
                    <hr style={{ width: '100%' }} />

                    <div className="filter-by-category">
                        <h3>categories</h3>
                        <p><input type="checkbox" name="" id="" /><h5>Men</h5></p>
                        <p><input type="checkbox" name="" id="" /><h5>women</h5></p>
                        <p><input type="checkbox" name="" id="" /><h5>electronics</h5></p>
                        <p><input type="checkbox" name="" id="" /><h5>fragrances</h5></p>
                    </div>
                    <hr style={{ width: '100%' }} />

                    <div className="filter-by-rating">
                        <h3>Rating</h3>
                        <p><input type="radio" name="rating" id="" /><h5>4⭐and_above</h5></p>
                        <p><input type="radio" name="rating" id="" /><h5>3⭐and_above</h5></p>
                        <p><input type="radio" name="rating" id="" /><h5>2⭐and_above</h5></p>
                        <p><input type="radio" name="rating" id="" /><h5>1⭐and_above</h5></p>





                    </div>
                    <hr style={{ width: '100%' }} />

                    <div className="filter-by-price2">
                        <h3>price</h3>
                        <p><input type="radio" name="price2" id="" /><h5>⬇️low_To_High⬆️</h5></p>
                        <p><input type="radio" name="price2" id="" /><h5>⬆️high_To_Low⬇️</h5></p>


                    </div>
                </div>
                <div className="product-container">
                    <Product
                        category={""}
                        title={""}
                        products={products}
                        productLoading={productLoading}
                    />
                </div>
            </div>
        </>
    );
};

export default Shop;
