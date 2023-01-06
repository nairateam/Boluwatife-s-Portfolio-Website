import React from 'react'
import './Connect.css'
import PryBtn from '../Extras/Button'
import connect from '../Media/connect.svg'

const Connect = () => {
  return (
    <div>
        <div className="connect_flex" id='connect' smooth>
            <div className="connect_item">
                <h2 className='page_title'>
                    What Next? <span>Get In Touch</span>
                </h2>
                <p>Thanks for stopping by, I’m currently looking to join a new team of creative designers, developers, start-up or a Company. If you think we might be a good fit for one another, click the button below to get through to me. I look forward to hearing from you !</p>
                <PryBtn tag='Contact Me' />
            </div>
            <div className="connect_item">
                <img src={connect} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Connect