import React from 'react'
import emailjs from 'emailjs-com'
import './Contacts.css'
const Contacts = () => {
    const SERVICE_ID = 'service_nu2p4mi'
    const TEMPLATE_ID = 'beatsnbars_email'
    const USER_ID = 'user_xvK8GQM7L25ZAqrgRY0lG'
    
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        e.target.reset()
    }

    return (
        <div className='contact'>
            <p>If you want to buy a beat or make a collaboration with me, send me an email via the form below.</p>
            <form onSubmit={sendEmail}>
                <div className='col-8 form-group mx-auto'>
                    <input type='text' className='form-control' placeholder='Name' name='name'/>
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <input type='email' className='form-control' placeholder='Email Address' name='email'/>
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <input type='text' className='form-control' placeholder='Subject' name='subject'/>
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <textarea className='form-control' id='' cols='30' rows='8' placeholder='Your message' name='message'></textarea>
                </div>
                <div className='col-8 pt-3 mx-auto'>
                    <input type='submit' className='btn btn-info' value='Send Message'/>
                </div>
            </form>
        </div>
    )
}

export default Contacts
