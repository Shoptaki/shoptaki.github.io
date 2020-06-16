import React from 'react';
import "./footer.css"
import facebookicon from "../images/facebook.svg"
import twittericon from "../images/twitter.svg"
import linkedinicon from "../images/linkedin.svg"


function Footer () {
    return (
        <div className="main-footer">
        <div className="container">        
        <div className="row"> 
            {/* flexbox 1*/}
        <div>
        <h3 className="footer-title">About Us</h3>
        <ul className="list-unstyled">
            <li ><a href="https://www.facebook.com/shoptaki/">Mission</a></li>
            <li><a href="https://www.facebook.com/shoptaki/">What is Smartchain?</a></li>
        </ul>
        </div>
            {/* flexbox 2*/}
        <div>
        <h3 className="footer-title">Products + Solutions</h3>
        <ul className="list-unstyled">
            <li><a href="https://www.facebook.com/shoptaki/">Products</a></li>
            <li><a href="https://www.facebook.com/shoptaki/">Solutions</a></li>
        </ul>
        </div>
           {/* flexbox 3*/}
        <div>
        <h3 className="footer-title">Support</h3>
        <ul className="list-unstyled">
            <li><a href="https://www.facebook.com/shoptaki/">Contact us</a></li>
            <li><a href="https://www.facebook.com/shoptaki/">FAQ</a></li>
        </ul>
        </div>
        </div>

        <div className="icon">
        <div>
            <a className= "facebook" href="https://www.facebook.com/shoptaki/" target="blank">
            <img className="social" src={facebookicon}/></a>  
        </div>
        <div>
            <a href="https://twitter.com/shoptaki?lang=en"><img className="social" src={twittericon}/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/company-beta/10899440?pathWildcard=10899440"><img className="social" src={linkedinicon}/></a>
        </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
            <p className= "text-xs-center">
            <h7>&copy; {(new Date().getFullYear())} Shoptaki, All Rights Reserved</h7>
            </p>
        </div>
        </div>
        </div>           
    )
    }
export default Footer;