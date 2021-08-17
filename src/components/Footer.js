import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from 'react-feather';
import esewa from '../img/payment/esewa.png'
import visa from '../img/payment/visa.png'
import ime from '../img/payment/ime.png'
function Footer() {
    return (
        <div className="footer">
            <div className="left-footer">
                <p>Payments Methods</p>
                <div className="payment-method">
                    <img src={visa} alt="eswa" />
                    <img src={esewa} alt="eswa" />
                    <img src={ime} alt="eswa" />

                </div>
            </div>
            <div className="middle-footer">
                <p>Social Medias</p>
                <div className="social-media">
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <Youtube />
                </div>

            </div>
            <div className="right-footer">
                <p>Email Newsletter</p>
                <div className="newsletter">
                    <input type="email" name="email" />
                    <button className="btn">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
