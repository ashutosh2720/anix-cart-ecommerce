import React, { useEffect } from "react";
import "./main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Sign from './Sign'
import { useState } from "react";
import Product from "../../components/product/Product";
import Topdeals from "../../components/topdeals/Topdeals";
import { useGlobalWishlist } from "../../contexts/wishlist-context";
// import Mens from "./Mens";

export default function Main() {
    return (
        <>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval="3000"
                emulateTouch={true}
            >
                <div>
                    <img src="https://www.liamjmoore.com/images/liam-moore-portfolio-john-lewis-9.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://1.bp.blogspot.com/-CccUX_R7xpk/YPF2An129PI/AAAAAAAABPM/l_yswgsw34Ua88ZCv8NCh-qGGBNQ-BIvwCNcBGAsYHQ/s1920/Small-appliances-banner-1920x500.jpg" />
                    <p className="legend">Legend 3</p>
                </div>

                <div>
                    <img src="https://trisvaraa.files.wordpress.com/2019/05/exclusive-features-that-makes-banarasi-sarees-special.jpg?w=656&h=290&crop=1" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://g3fashion.cdn.imgeng.in/upload/new_home/sub_banner/1668498287_girl-sub-banner-choli-suit.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://uk.yamaha.com/en/files/tw-e3b-purple-slider_5292a53b94567c3c40d65d5595c4c3ae.jpg?impolicy=resize&imwid=1200&imhei=480" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <br />

            <Topdeals category="womens-saaree" title="womens-saaree" />
            <Topdeals category="tops" title="Tops" />
            <Topdeals category="smart-tv" title="smart-tv" />
            <Topdeals category="laptops" title="laptops" />
            <Topdeals category="smartphones" title="smartphones" />
            <Topdeals category="mens-watches" title="Mens Watches" />

            <div className="cole">
                {" "}
                <h2>Our Collections</h2>
            </div>

            <div className="collection">
                <div className="Mens-jacket col">
                    <img src="https://i.postimg.cc/rp72Z66X/red-top-1.jpg" alt="" />
                    <div className="txt"></div>
                </div>
                <div className="Womens-saree col">
                    <img src="https://i.postimg.cc/bwy3BH0h/graan-saaree-1.jpg" alt="" />
                </div>
                <div className="Mens-shoes col">
                    <img
                        src="https://pluspng.com/img-png/mens-shoes-hd-png-download-clothes-mens-shoes-2000.png"
                        alt=""
                    />
                </div>
                <div className="girls-lahenga col">
                    <img
                        src="https://cdn.shopify.com/s/files/1/1768/0827/products/MG_9675_grande.png?v=1509561488"
                        alt=""
                    />
                </div>
                <div className="Mens-shoes col">
                    <img
                        src="https://i.dummyjson.com/data/products/61/thumbnail.jpg"
                        alt=""
                    />
                </div>
                <div className="girls-lahenga col">
                    <img src="https://i.postimg.cc/T3z03bsb/asus-1.jpg" alt="" />
                </div>
            </div>
        </>
    );
}
