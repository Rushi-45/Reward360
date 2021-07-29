import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown.js';
import logo from '../../images/logo.png'

function Navbar1() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav class="navbar navbar-light bg-light d-sm-none">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>

            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-light p-4">
                    </div>


                    <ul id="nav-list" className="nav navbar-nav navbar-collapse">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <br />Chicken</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <br />Beef</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <br />Sushi</a>
                        </li>
                    </ul>
                </div>
            </div>
       
        </>
    );
}

export default Navbar1;
