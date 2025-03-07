import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'


const Navbar = () => {

    const [active, setActive] = useState('navBar')
    // Function for toggling navBar
    const showNavBar = () => {
        setActive('navBar activeNavbar')
    }
    // Function for closing navBar
    const removeNavBar = () => {
        setActive('navBar')
    }

    return (
        <section className='navBarSection'>
            <header className='headerNavbar flex'>
                <div className='logoDiv'>
                    <Link className="logo flex" to="/">

                        <img src={`${process.env.PUBLIC_URL}/assets/Logo.png`} alt="Error" className="icon" ></img>

                    </Link>
                </div>

                <div className={active}>
                    <ul className="navLists-FT flex">

                        <Link className='link-underline-issue' to="/">
                            <li className="navItem-FT">
                                <p className="NavBarLinks-FT">Home</p>
                            </li>
                        </Link>

                        <Link className='link-underline-issue' to="/products">
                            <li className="navItem-FT">
                                <p className="NavBarLinks-FT">Products</p>
                            </li>
                        </Link>

                        <Link className="link-underline-issue" to="/merchant">
                            <li className="navItem-FT">
                                <p className="NavBarLinks-FT">SubMerchants</p>
                            </li>
                        </Link>

                        <Link className='link-underline-issue' to="/faq">
                            <li className="navItem-FT">
                                <p className="NavBarLinks-FT">FAQ</p>
                            </li>
                        </Link>

                        <Link className='link-underline-issue' to="/privacy">
                            <li className="navItem-FT">
                                <p className="NavBarLinks-FT">Privacy Policy</p>
                            </li>
                        </Link>

                        <Link className='link-underline-issue' to="/contact">
                            <li className="navItem-FT">
                                <p className="NavBarLinks-FT">Contact</p>
                            </li>
                        </Link>

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
