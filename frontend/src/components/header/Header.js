import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <Link style={{ background: 'transparent' }} to='/'>
                <img className='logo' alt='' src={logo}></img>
            </Link>
            <Link style={{ background: 'transparent' }} to='/'>
                <h1 id='home'>Home</h1>
            </Link>

            <Link style={{ background: 'transparent' }} to='/beats'>
                <h1>Beats</h1>
            </Link>
            <Link style={{ background: 'transparent' }} to='/about'>
                <h1>About</h1>
            </Link>

        </header>
    )
}

export default Header