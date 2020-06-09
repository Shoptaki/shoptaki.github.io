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
            {/* column 1*/}
        <div className="col">
        <h4>About Us</h4>
        <ul className="list-unstyled">
            <li ><a className = "link" href="https://www.facebook.com/shoptaki/" target="blank">Mission</a></li>
            <li><a className = "link" href="https://www.facebook.com/shoptaki/" target="blank">What is Smartchain?</a></li>
            <br /><br /> 
        </ul>
        </div>
            {/* column 2*/}
        <div className="col">
        <h4>Products + Solutions</h4>
        <ul className="list-unstyled">
            <li><a className = "link" href="https://www.facebook.com/shoptaki/" target="blank">Products</a></li>
            <li><a className = "link" href="https://www.facebook.com/shoptaki/" target="blank">Solutions</a></li>
            <br /><br /> 
        </ul>
        </div>
            {/* column 3*/}
        <div className="col">
        <h4>Support</h4>
        <ul className="list-unstyled">
            <li><a className = "link" href="https://www.facebook.com/shoptaki/" target="blank">Contact us</a></li>
            <li><a className = "link" href="https://www.facebook.com/shoptaki/" target="blank">FAQ</a></li>
            <br /><br />
        </ul>
        
        </div>
        </div>
        
        <icon>
        <a href="https://www.facebook.com/shoptaki/" target="blank"><img className="social" src={facebookicon}/></a>
        <span class="tab"></span>
        <a href="https://twitter.com/shoptaki?lang=en"><img className="social" src={twittericon}/></a>
        <span class="tab"></span>
        <a href="https://www.linkedin.com/company-beta/10899440?pathWildcard=10899440"><img className="social" src={linkedinicon}/></a>
        </icon>

        {/* Footer Bottom */}
        <div className="footer-bottom">
            <p className= "text-xs-center">
            <h6>&copy;Shoptaki, All Rights Reserved</h6>
            </p>
        </div>

        </div>
        </div>           
    )
    }
export default Footer;