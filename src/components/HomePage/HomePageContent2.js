import React from 'react'
import '../HomePage/HomePageContent2.css'

import animationIcon from '../../Assets/Home/frame copy@2x.png'
import Games from '../../Assets/Home/joystick copy@2x.png'
import Chatbots from '../../Assets/Home/robotic copy@2x.png'
import Augmented from '../../Assets/Home/augmented-reality copy@2x.png'
import Pic from '../../Assets/Carousel Images/Projects 01.png'


const HomePageContent2 = () => {
  return (
    <>
    <div className="Content">
        <div className="Boxheader">
            <div className='Header'>
                <h1>What we offer</h1>
            </div>
            <div className='con-text'>
                <p><b>The Creative Problem Solving programme is series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand’s leading IT industry experts and schools.</b></p>
            </div>
            <div className='selection'>
                <h1>What will students create?</h1>
            </div>
            <div className="selection-box">
                <div className='Box'>
                    <div className='Box-img'>
                        <img src={animationIcon} alt="animationIcon" width={75} />
                    </div>
                    <div className='box-title'>AMINATION</div>
                </div>
                <div className='Box'>
                    <div className='Box-img'>
                        <img src={Games} alt="animationIcon" width={75} />
                    </div>
                    <div className='box-title'>GAMES</div>
                </div>
                <div className='Box'>
                    <div className='Box-img'>
                        <img src={Chatbots} alt="animationIcon" width={75} />
                    </div>
                    <div className='box-title'>CHATBOTS</div>
                </div>
                <div className='Box'>
                    <div className='Box-img'>
                        <img src={Augmented} alt="animationIcon" width={75} />
                    </div>
                    <div className='box-title'>AUGMENTED REALITY</div>
                </div>
            </div>
        </div>
        <div className='Box2'>
            <img className='carousel' width={600} src={Pic} alt="" />
        </div>
    </div>
    </>
  )
}

export default HomePageContent2