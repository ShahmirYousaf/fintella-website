import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    // Function for toggling navBar
    const showNavBar = () => {
        setActive('navBar activeNavbar');
    };

    // Function for closing navBar
    const removeNavBar = () => {
        setActive('navBar');
    };

    return (
        <section className='navBarSection'>
            <header className='headerNavbar flex'>
                <div className='logoDiv'>
                    <NavLink className="logo flex" to="/">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
                            alt="Error"
                            className="icon"
                        />
                    </NavLink>
                </div>

                <div className={active}>
                    <ul className="navLists-FT flex">
                        <li className="navItem-FT">
                            <NavLink
                                to="/"
                                exact
                                className={({ isActive }) =>
                                    isActive ? 'NavBarLinks-FT activePage' : 'NavBarLinks-FT'
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="navItem-FT">
                            <NavLink
                                to="/products"
                                exact
                                className={({ isActive }) =>
                                    isActive ? 'NavBarLinks-FT activePage' : 'NavBarLinks-FT'
                                }
                            >
                                Products
                            </NavLink>
                        </li>

                        <li className="navItem-FT">
                            <NavLink
                                to="/merchant"
                                exact
                                className={({ isActive }) =>
                                    isActive ? 'NavBarLinks-FT activePage' : 'NavBarLinks-FT'
                                }
                            >
                                SubMerchants
                            </NavLink>
                        </li>

                        <li className="navItem-FT">
                            <NavLink
                                to="/faq"
                                exact
                                className={({ isActive }) =>
                                    isActive ? 'NavBarLinks-FT activePage' : 'NavBarLinks-FT'
                                }
                            >
                                FAQ
                            </NavLink>
                        </li>

                        <li className="navItem-FT">
                            <NavLink
                                to="/privacy"
                                exact
                                className={({ isActive }) =>
                                    isActive ? 'NavBarLinks-FT activePage' : 'NavBarLinks-FT'
                                }
                            >
                                Privacy Policy
                            </NavLink>
                        </li>

                        <li className="navItem-FT">
                            <NavLink
                                to="/contact"
                                exact
                                className={({ isActive }) =>
                                    isActive ? 'NavBarLinks-FT activePage' : 'NavBarLinks-FT'
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="navItem-FT">
                            <NavLink
                                to="/return_refund"
                                exact
                                className={({ isActive }) =>
                                    isActive ? 'NavBarLinks-FT activePage' : 'NavBarLinks-FT'
                                }
                            >
                                Return & Refunds
                            </NavLink>
                        </li>
                    </ul>
                    <div onClick={removeNavBar} className="closeNavBar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNavBar} className="toggleNavBar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
