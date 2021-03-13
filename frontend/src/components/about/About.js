import React from 'react'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.css'
const About = () => {
    return (
        <div className='about'>
            <h1 className='mt-4'>I am a music producer, mainly interested in:</h1>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    Rap
                </li>
                <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    Trap
                </li>
                <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    Raegetton
                </li>
            </ul>

            <div className='donate'>
                <h2 className='mt-4'>If you like my music, you can donate any amount using the link below.</h2>
                <form action="https://www.paypal.com/donate" method="post" target="_top" className='mt-4'>
                    <input type="hidden" name="hosted_button_id" value="7QGZ5NJDNXKF8" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_BG/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div>
    )
}

export default About
