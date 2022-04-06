import React, { useState } from 'react'
import './NavbarHome.css'
// import { Link } from 'react-router-dom'


import StarLogo from '../../Assets/Home/Star Logo 07-2.png'
import NZFlag from '../../Assets/Images/NZ Flag.png'
import MaoriFlag from '../../Assets/Images/Maori flag.png'
import UserIcon from '../../Assets/Images/Icon awesome-user-circle.png'
// import LoginModal from '../Pages/LoginModal'

const NavbarHome = () => {

    // const [showModal, setShowModal] = useState(false)

    // const openModal = () => {
    //   setShowModal(true)
    // }


  return (
    <>
        <div className='homeNavbar' >
            {/* {showModal ? <LoginModal setShowModal={setShowModal} /> : null} */}
        <div className='left'>
            <img src={StarLogo} width={150} alt="LevelUpLogo"/>
        </div>
        <div className='nav-buttons'>
            <div className='button'>
                <div className='home'>
                    <h3>HOME</h3>
                </div>
                <div className='feature'>
                    <h3>FEATURES</h3>
                </div>
                <div className='teacher'>
                    <h3>TEACHERS</h3>
                </div>
            </div>
        </div>
        <div className="right">
            <div className='flags'>
                <p>LANG</p><img className='nz-flag' src={NZFlag} alt="Nz-Flag"/>
                <img className='maori-flag' src={MaoriFlag} alt="Maori-Flag"/>
            </div> 
            <div className='userLogin'>
                <div className='user'>
                <img src={UserIcon} alt="userIcon" width={24} height={24}/>
                <div>REGISTER | </div> 
                {/* <div  onClick={() => openModal(false)}>LOGIN</div> */}
                <div>LOGIN</div>
            </div>
            
            </div>
        </div>

    </div>
    </>
  )
}

export default NavbarHome