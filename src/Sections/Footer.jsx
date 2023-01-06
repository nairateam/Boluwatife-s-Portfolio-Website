import React from 'react'
import './Footer.css'
import phone from '../Media/Icons/phone.svg'
import mail from '../Media/Icons/mail.svg'
import copy from '../Media/Icons/copy.svg'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="foot_wrap">
                <span><img src={phone} alt="" /> <p>+2349065745693</p></span>
                <span><img src={mail} alt="" /> <p>ayodejiboluwatife19@gmail.com</p></span>
            </div>
            <div className="foot_wrap">
                <span><img src={copy} alt="" /> <p>Copyright - Boluwatife Ayodeji 2023</p></span>
            </div>
        </div>
    </div>
  )
}

export default Footer