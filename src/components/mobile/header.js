import React, { Fragment, useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import Sidebar from './component/Sidebar';
import Logo from '../../assets/footer-logo.png'
import '../../styles/landingpage.scss'


function MobileHeader() {
    const [showForm, setShowForm] = useState(false);
    const [navSize, setnavSize] = useState("");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%"
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <Fragment>
            <div className='header'>
                <div className='header__mobile'>
                    <div className='header__mobile' style={{ backgroundColor: navColor, height: navSize, transition: "all 1s", zIndex: '1' }}>
                        <div className='header__mobile--left'>
                            <div id="mySidenav" className="sidenav">
                                <Link to="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</Link>
                                <Link to="#">About</Link>
                                <Link to="#">Services</Link>
                                <Link to="#">Clients</Link>
                                <Link to="#">Contact</Link>
                            </div>
                            <span onClick={openNav}>&#9776;</span>
                        </div>
                        <div className='header__mobile--img'>
                            <img src={Logo} alt='logo' />
                        </div>
                        <div className='header__mobile--right'>
                            <div className='header__mobile--right--child'>
                                <Link to='/' className='up'>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default MobileHeader;

