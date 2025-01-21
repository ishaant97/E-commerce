import React, { useState, useContext } from 'react';
import "./styles/Navbar.css";
import logo from "../../assets/img/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import axios from 'axios';
import Context from '../../context/Context';



function Navbar() {

    const [query, setQuery] = useState('');
    // const history = useHistory();
    const navigate = useNavigate();
    const { setProductData } = useContext(Context);

    const handleSearch = async (event) => {
        event.preventDefault();

        if (query) {
            const options = {
                method: 'GET',
                url: 'https://real-time-amazon-data.p.rapidapi.com/search',
                params: {
                    query: query,
                    page: '1',
                    country: 'IN',
                    sort_by: 'RELEVANCE',
                    product_condition: 'ALL'
                },
                headers: {
                    'x-rapidapi-key': '3962322a1amshbf868885feddf98p100253jsnc699c8ec37ff',
                    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const productData = response.data;

                // Save product data to local storage
                // localStorage.setItem('productData', JSON.stringify(productData));
                setProductData(productData);
                // console.log(productData);

                // Redirect to product page
                // history.push('/product');
                navigate("/productPage");
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        }
    };




    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
            </div>
            <div className='search-box-container'>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='input-search-box'
                        placeholder="Search..." />
                </form>
                {/* searchIcon */}
            </div>
            <div className='wishlist-cart-container'>
                <div style={{ marginRight: '2rem' }}>
                    <Link to="/wishlist">
                        <FaRegHeart style={{ height: 'auto', width: '1.5rem' }} />
                    </Link>
                </div>
                <div style={{ marginRight: '2rem' }}>
                    <Link to="/cart">
                        <MdOutlineShoppingCart style={{ height: 'auto', width: '1.5rem' }} />
                    </Link>
                </div>
                <div>
                    <Link to="/userProfile">
                        <FaUser style={{ height: 'auto', width: '1.5rem' }} />
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar
