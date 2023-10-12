import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Navbar.css'


const Navbar = () => {
    return (
        <Link to="/">
            <div>
                <div className='navbar'>
                    <FaEye className='icon' />
                    <h1> Crypto <span className='yellow'>Sight</span></h1>
                </div>

            </div>
        </Link>
    )
}

export default Navbar