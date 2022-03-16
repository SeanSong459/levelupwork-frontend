import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'



const TopNavBar = () => {
return (
    <div className='navbar'>
        <div className='left'>
            <img src={process.env.PUBLIC_URL + "/Images/Home/Star Logo 07-3.png"} width={150} alt="LevelUpLogo"/>
        </div>
        <div className='nav-buttons'>
            <div className='button'>
                <div className='take-screen-shot'>
                    <h3>Take Screenshot</h3>
                </div>
                <div className='help-center'>
                    <h3>Help Center</h3>
                </div>
                <div className='more-project'>
                    <h3><Link className='mp' to="/">More Project</Link> </h3>
                </div>
            </div>
        </div>
        <div className='flags'>
            <img className='nz-flag' src={process.env.PUBLIC_URL + "/Images/Home/Nz Flag.png"} alt="Nz-Flag"/>
            <img className='maori-flag' src={process.env.PUBLIC_URL + "/Images/Home/Maori flag.png"} alt="Maori-Flag"/>
        </div>
    </div>
)
}

export default TopNavBar;