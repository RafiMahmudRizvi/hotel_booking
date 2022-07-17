import React from 'react'

//css
import './mailList.css'

const MailList = () => {
  return (
    <div className="mailList">
    <div className="mailList__container">

        <h2 className="mailList__title"> Save time, save money! </h2>
        <p className="mailList__description">Sign up and we'll send the best deals to you</p>
        <div className='mailList__email'>
            <input type="email" placeholder='Your email'/>
            <button>Subscribe</button>
        </div>
        <div className='mailList__checkbox'>
            <input type="checkbox" />
            <label htmlFor="checkbox">Send me a link to get the FREE Booking.com app!</label>
        </div>

    </div>    
    </div>
  )
}

export default MailList