import React from 'react';
import { FaEye } from 'react-icons/fa';

import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <FaEye className='icon' />
                <h1> Crypto <span className='yellow'>Sight</span></h1>
            </div>
        </div>
    )
}

export default Navbar