import React from 'react'
import './HomeFooter.css'

const Footer = () => {
  return (
    <>
        <div className='homeFooter'>
            <div className="content">
                <h2>COMPANY</h2>
                <div className='text'>
                    <li>
                        About Us Careers Partners
                    </li>
                    <li>
                        Careers
                    </li>
                    <li>
                        Partners
                    </li>
                </div>
            </div>
            <div className="content">
                <h2>COURSES</h2>
                <div className="text">
                    <li>
                        Register
                    </li>
                    <li>
                        Login 
                    </li>
                    <li>
                        Projects 
                    </li>
                    <li>
                        Teachers 
                    </li>
                    <li>
                        Parents Resources
                    </li>
                </div>
            </div>
            <div className="content">
                <h2>SUPPORT</h2>
                <div className='text'>
                    <li>FAQs</li>
                    <li>Helpdesk</li>
                    <li>Contact Us</li>
                </div>
            </div>
            <div className="content">
                <h2>LEGAL</h2>
                <div className='text'>
                    <li>
                        Terms & Conditions
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                </div>
            </div>
            <div className="content">
                <h2>LevelUp Works</h2>
                <div className='levelUpWork'>
                LevelUp Works LevelUp Works is an Auckland-based enterprise dedicated to developing game-based learning software to help teachers in response to the New Zealand Digital Technologies & Hangarau Matihiko. alan@levelupworks.com (021) 668 185
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer