import React from 'react'
import "./styles/Main.css"
import headphone from "../../assets/img/headphone.png"
import keyboard from "../../assets/img/keyboard.png"
import mouse from "../../assets/img/mouse.png"
import gamingChair from "../../assets/img/gamingChair.png"

function Main() {
    return (
        <div className='main-container'>
            <div className='container'>
                <div className='product-heading'>
                    <h2>Gamming accessories</h2>
                </div>
                <div className='main-product-container'>
                    <div className='product'>
                        <img className='image' src={headphone} alt="headphone" />
                        Headsets
                    </div>
                    <div className='product'>
                        <img className='image' src={keyboard} alt="keyboard" />
                        Keyboard
                    </div>
                    <div className='product'>
                        <img className='image' src={mouse} alt="mouse" />
                        Mouse
                    </div>
                    <div className='product'>
                        <img className='image' src={gamingChair} alt="gamingChair" />
                        Gaming Chair
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='product-heading'>
                    <h2>Gadgets</h2>
                </div>
                <div className='main-product-container'>

                    <div className='product'>
                        Product 1
                    </div>
                    <div className='product'>
                        Product 2
                    </div>
                    <div className='product'>
                        Product 3
                    </div>
                    <div className='product'>
                        Product 4
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='product-heading'>
                    <h2>lorem</h2>
                </div>
                <div className='main-product-container'>

                    <div className='product'>
                        Product 1
                    </div>
                    <div className='product'>
                        Product 2
                    </div>
                    <div className='product'>
                        Product 3
                    </div>
                    <div className='product'>
                        Product 4
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
