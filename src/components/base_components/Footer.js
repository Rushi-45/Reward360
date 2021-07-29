import React from "react";
import twitter from "super-tiny-icons/images/svg/twitter.svg";
import instagram from "super-tiny-icons/images/svg/instagram.svg";
import facebook from "super-tiny-icons/images/svg/facebook.svg";
import logo from '../../images/logo.png'

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <img src={logo} alt={logo} />
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <a href="https://twitter.com/" target="blank">
                    <img className="social-link" alt="twitter" src={twitter} />
                </a>
                <a href="https://www.instagram.com/" target="blank">
                    <img className="social-link" alt="instagram" src={instagram} />
                </a>
                <a href="https://www.instagram.com/" target="blank">
                    <img className="social-link" alt="facebook" src={facebook} />
                </a>
            </div>
            <div className="footer-copyright font-weight-bold text-center py-3">Copywright 2020 Soprano.ai</div>
        </div>
    </div>
</footer>

export default Footer