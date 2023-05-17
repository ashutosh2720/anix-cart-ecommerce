import React, { useEffect } from "react";
import './main.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';
// import Sign from './Sign'
import { useState } from "react";
import Product from "../../components/product/Product";
// import Mens from "./Mens";


export default function Main() {




    return (
        <>

            <Carousel autoPlay={true} infiniteLoop={true} interval='3000' emulateTouch={true}>
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

            <Product
                category='tops'
                title='Tops'
            />

            <Product
                category='womens-saaree'
                title='womens-saaree'
            />

            <Product
                category='mens-shoes'
                title='mens Shoes'
            />
            <Product
                category='mens-watches'
                title='Mens Watches'
            />

            <Product
                category='laptops'
                title='laptops'
            />





            <div className="cole"> <h2>Our Collections</h2></div>

            <div className="collection">
                <div className="Mens-jacket col">
                    <img src="https://www.pngarts.com/files/3/Men-Jacket-PNG-Free-Download.png" alt="" />
                    <div className="txt">jacket</div>

                </div>
                <div className="Womens-saree col">
                    <img src="https://th.bing.com/th/id/R.c065f741320873055400b4a8f5b43201?rik=tyUE5lyoZkboKw&riu=http%3a%2f%2fwww.pngimagesfree.com%2fPeople%2fSaree%2fSaree-2%2fSilk-Saree-PNG-wearing-model_pngimagesfree.com.png&ehk=P21TJx2eJwbp6GyxN2qfEGBkI7JjapZQTEmlCgGITT0%3d&risl=&pid=ImgRaw&r=0" alt="" />

                </div>
                <div className="Mens-shoes col">
                    <img src="https://pluspng.com/img-png/mens-shoes-hd-png-download-clothes-mens-shoes-2000.png" alt="" />

                </div>
                <div className="girls-lahenga col">
                    <img src="https://cdn.shopify.com/s/files/1/1768/0827/products/MG_9675_grande.png?v=1509561488" alt="" />

                </div>
                <div className="Mens-shoes col">
                    <img src="https://pluspng.com/img-png/mens-shoes-hd-png-download-clothes-mens-shoes-2000.png" alt="" />

                </div>
                <div className="girls-lahenga col">
                    <img src="https://cdn.shopify.com/s/files/1/1768/0827/products/MG_9675_grande.png?v=1509561488" alt="" />

                </div>


            </div>
        </>
    )
}