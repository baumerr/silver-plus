import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './Nav.css'
import Logo from '../../assets/silver-plus-header.png'

const Nav = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <><div className='logo'>
            <img src={Logo}></img>
        </div><div className='container-main'>
                <a href='/' class='Links'>
                    <h1>Dating for the Elderly</h1>
                </a>

                <div className='text-center'>
                    {Auth.loggedIn() ? (
                            <><a href="/profile" class='Links'>My Silver Plus Profile</a><a href="/" onClick={logout}>
                            Logout
                        </a></>
                    ) : (
                            <><a href="/login" class='Links'>Login</a><br></br><a href="/signup" class='Links'>Sign-Up</a></>
                    )}
                </div>
            </div></>
    );
};

export default Nav;
