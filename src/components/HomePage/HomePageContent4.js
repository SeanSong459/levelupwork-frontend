import React from 'react'

import '../HomePage/HomePageContent4.css'
import StarLogo from '../../Assets/Home/Star only copy.png'

const HomePageContent4 = () => {
  return (
    <>
        <div className='competencies'>
            <div className='comp-title'>
                <h1>Enhance key competencies</h1>
            </div>
            <div className='comp-text'>
                <p><b>The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum:</b></p>
            </div>
            <div className='comp-bodyContainer'>
                <div className='starLogo'>
                    <img src={StarLogo} alt="star" width={50}/>
                    <img src={StarLogo} alt="star" width={50}/>
                    <img src={StarLogo} alt="star" width={50}/>
                    <img src={StarLogo} alt="star" width={50}/>
                    <img src={StarLogo} alt="star" width={50}/>
                </div>
                <div className="comp-body">
                    <h2>THINKING</h2>
                    <p>In particular the programme focused on problem solving, design thinking and computational thinking.</p>
                    <h2>DISCERNING CODES</h2>
                    <p>Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.</p>
                    <h2> SELF-MANAGEMENT</h2>
                    <p> Projects and challenges are designed to motivate students to explore and experiment with self-motivation </p>
                    <h2>RELATIONSHIPS WITH PEERS </h2>
                    <p>The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.</p>
                    <h2>PARTICIPATION AND COLLABORATION</h2>
                    <p>The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            
        </div>
    </>
  )
}

export default HomePageContent4