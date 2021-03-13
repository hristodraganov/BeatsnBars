import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSoundcloud, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='footer'>
            <hr className='footer-start'></hr>
            <span>About</span>
            <Link to='/contacts'>
                <span>Contact me</span>
            </Link>
            <div className='icons'>
                <Link target='_blank' to='//www.instagram.com/draganovhr/'>
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                </Link>
                <Link target='_blank' to='//www.soundcloud.com/user-15046941'>
                    <FontAwesomeIcon icon={faSoundcloud} size='2x' />
                </Link>
                <Link target='_blank' to='//www.github.com/rllstpwz'>
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
