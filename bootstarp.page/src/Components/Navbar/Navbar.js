import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
    return (
        <div className='nav'>
            <div className='navbar'>
                <div className='navbar_logo'><NavLink to='/'><span>Start Bootstrap</span></NavLink></div>
                <div className='navbar_list'>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='https://github.com/StartBootstrap/sb-clean-blog-angular'><i class="fa-brands fa-github"></i></NavLink> </li>
                    </ul>
                </div>
                <div className='navbar_burger'><i class="fas fa-bars"></i></div>
            </div>
        </div>
    )
}

export default Navbar