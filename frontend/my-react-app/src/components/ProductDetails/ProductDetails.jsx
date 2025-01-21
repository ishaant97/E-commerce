import React from 'react'
import { useParams } from 'react-router-dom';
import "./styles/ProductDetails.css"
import gaming from "../../assets/img/gamingChair.png"

function ProductDetails() {
    const params = useParams();
    const productASIN = params.asin;

    return (
        <div className='productDetails-container'>
            <div className='product-imgs-and-buy-container'>
                <div className='product-imgs-container'>
                    <img src={gaming} alt="Product" />
                </div>
                {/* <div className='addToCart-and-buyNow-container'>
                    <div>Add to cart</div>
                    <div>Buy Now</div>
                </div> */}
            </div>
            <div className='details-container'>
                <div className='title-container'>
                    <h2>
                        SAMSUNG Galaxy F34 5G (Mystic Green, 128 GB)  (6 GB RAM)
                    </h2>
                </div>
                <div className='rating-container'>
                    4.240,335 Ratings & 3,055 Reviews
                </div>
                <div className='price-container'>
                    <span>₹15,499</span> ₹24,499 36% off
                </div>
            </div>
            <div>
                Add to addToCart
            </div>
        </div>
    )
}

export default ProductDetails
