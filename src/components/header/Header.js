import React, { Fragment, useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/footer-logo.png'
import Search from '../search/Search'
import '../../styles/landingpage.scss'
import user from "../../assets/banner-page-review.png"
function Header() {
    const [showForm, setShowForm] = useState(false);
    const [navSize, setnavSize]  = useState("");
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
 
 
    return (
        <Fragment>
            <div className='header'>
                <div className='header__wrapper' style={{backgroundColor: navColor, height: navSize, transition: "all 1s", zIndex:'1'}}>
                    <div className='header__wrapper-img'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='header__search' >
                        <Search />
                    </div>
                    <div className='header__link'>
                        <ul>
                            {/* <NavLink to='/' className='mktplc'>
                                <li>Home</li>
                            </NavLink>
                            <NavLink to='/' className='mktplc'>
                                <li>Dashboard</li>
                            </NavLink> */}
                            <NavLink to='/' className='mktplc'>
                                <li>Marketplace</li>
                            </NavLink>
                            <NavLink to='/' className='htdl'>
                                <li>Hotdeals
                                    <span>
                                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.8918 4.90145C9.87556 6.12945 9.52262 7.79211 7.86803 8.43675C8.38615 7.01021 8.46521 5.64495 8.09815 4.36874C7.60756 2.65542 5.97062 1.31712 4.88144 0.588329C4.50944 0.338316 4.03227 0.648789 4.03933 1.14636C4.05344 2.0549 3.81486 3.38258 2.6565 4.72333C1.11344 6.50773 0.332031 8.35178 0.332031 10.2032C0.332031 12.5276 1.7438 15.5 4.56733 15.5C1.71485 12.1984 3.86144 9.38614 3.86144 9.38614C4.45862 14.2181 7.38238 15.5 8.80262 15.5C10.0104 15.5 12.332 14.4787 12.332 10.2318C12.332 7.67201 11.3918 5.7291 10.6485 4.59506C10.4036 4.22086 9.89744 4.43329 9.8918 4.90145Z" fill="black" />
                                        </svg>
                                    </span>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className='header__right'>
                        <div className='header__right--child'>
                            <Link to='/login' className='in'>Sign In</Link>
                            {/* <Link to='/signup' className='up'>Sign Up</Link> */}
                        </div>
                        {/* <div className='header__right--profile'>
                            <div className='notify'>
                                <span>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.00003 20C10.3797 20 11.4989 18.8809 11.4989 17.5H6.5012C6.5012 18.8809 7.62034 20 9.00003 20ZM17.4137 14.152C16.659 13.341 15.2469 12.1211 15.2469 8.125C15.2469 5.08984 13.1188 2.66016 10.2492 2.06406V1.25C10.2492 0.559766 9.68987 0 9.00003 0C8.31018 0 7.75081 0.559766 7.75081 1.25V2.06406C4.88128 2.66016 2.75315 5.08984 2.75315 8.125C2.75315 12.1211 1.34104 13.341 0.586355 14.152C0.35198 14.4039 0.248074 14.7051 0.250027 15C0.254324 15.6406 0.757058 16.25 1.50393 16.25H16.4961C17.243 16.25 17.7461 15.6406 17.75 15C17.752 14.7051 17.6481 14.4035 17.4137 14.152Z" fill="#666666" />
                                    </svg>
                                </span>
                                <div className='num'>5</div>
                            </div>
                            <div className="action">
                                <div className="action__profile" onClick={() => setShowForm(!showForm)}>
                                    <img src={user} alt='user image' />
                                </div>
                                {
                                showForm &&
                                <div className="menu" >
                                     <div className='menu__userinfo'>
                                       <div className='menu__top'>
                                           <div className='right'>
                                             <img src={user} alt="user image"/>
                                              <span className='visible'></span>
                                           </div>
                                           <div className='left'>
                                              <h1>Fortunebolt Opeyemi</h1>
                                              <p>Graphics Design</p>
                                           </div>
                                       </div>
                                       <div className='menu__view'>
                                           <Link to='/' className='profile'>View Profile</Link>
                                       </div>
                                       <div className='menu__elite'>
                                           <Link to='/' className='member'>Become an elite member</Link>
                                       </div>
                                     </div>
                                    <ul>
                                        <li>
                                            <NavLink to='/' className='account'>Account</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/' className='sub-nav'>Settings & Privacy</NavLink>
                                        </li>
                                        <li>
                                          <NavLink to='/' className='sub-nav'>Help</NavLink>
                                        </li>
                                        <li>
                                           <NavLink to='/' className='sub-nav'>Language</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/' className='account'>Manage</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/'className='sub-nav' >Dashboard</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/'className='sub-nav' >Pages</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/'className='sub-nav' >Eevnts</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/' className='sub-nav'>Logout</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                }
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Header;
