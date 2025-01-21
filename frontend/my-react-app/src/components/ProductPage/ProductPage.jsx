import React, { useContext } from 'react'
import './styles/ProductPage.css'
// import gaming from '../../assets/img/gamingChair.png'
import Context from '../../context/Context'
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";

function ProductPage() {
    const { productData } = useContext(Context);
    // const test = () => {
    //     console.log(productData);
    // }

    return (
        <div className='productPage-container'>
            <div className='sort-container'>
                Sort by
            </div>
            {
                productData.data.products.map(product => (
                    <div className='product-container'>
                        <div className='product-img-container'>
                            <img
                                className='product-img'
                                src={product.product_photo}
                                alt="Product" />
                        </div>
                        <div className='product-info-container'>
                            <div className='product-title'>
                                <h3>{product.product_title}</h3>
                            </div>
                            <div>
                                {product.product_star_rating} {product.product_num_ratings} Ratings
                            </div>
                            <div>
                                {product.sales_volume}
                            </div>
                            <div className='add-to-cart-and-view-details'>
                                <div>
                                    <button>
                                        Add to cart
                                    </button>
                                </div>
                                <div>
                                    <Link to={`/productPage/${product.asin}`} className='link'>
                                        <button>
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='pricing-and-delivery-container'>
                            <div className='price-container'>
                                <h1>{product.product_price}</h1>
                            </div>
                            <div className='delivery-container'>
                                {product.delivery}
                            </div>
                        </div>
                        <div className='wishlist-button-container'>
                            <button className='wishlist-botton'>
                                <CiHeart style={{
                                    width: '1.5rem', height: 'auto'
                                }} />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div >

    )
}

export default ProductPage
