import React from 'react'
import '../HomePage/HomePageContent3.css'
import img1 from '../../Assets/Home/idea copy@2x.png'
import img2 from '../../Assets/Home/brain copy@2x.png'
import img3 from '../../Assets/Home/team copy@2x.png'
import img4 from '../../Assets/Home/atom copy@2x.png'

const HomePageContent3 = () => {
  return (
    <>
        <div className='Background-title'>
            <h1>Teaching kids programming and digital skills is <i>MORE</i> than just writing code.</h1>
        </div>
        <div className='backgroundImage'>
            <div className="background-Box">
                    <div className="inside-Box">
                        <img src={img1} alt="" width={100} />
                        <div className='text-con'><b>Creativity <br/> & Individuality</b></div>
                    </div>
            </div>
            <div className="background-Box2">
                    <div className="inside-Box">
                        <img src={img2} alt="" width={100} />
                        <div className='text-con'><b>Critical Thinking <br/>& Problem Solving</b></div>
                    </div>
            </div>
            <div className="background-Box3">
                    <div className="inside-Box">
                        <img src={img3} alt="" width={100} />
                        <div className='text-con'><b>Communication <br/> & Collaboration</b></div>
                    </div>
            </div>
            <div className="background-Box4">
                    <div className="inside-Box">
                        <img src={img4} alt="" width={100} />
                        <div className='text-con'><b>Technology <br/> & Future Focus</b></div>
                    </div>
            </div>
        </div>
        <div className='ourProgram'>
            <h1>How our programme helps teachers and schools </h1>
        </div>
        <div className='programTitle'>
                <div className="programs1">
                    <h2>LEARNING PATHWAYS</h2>
                </div>
                <div className="programs2">
                    <h2>DIGITAL TECHNOLOGIES</h2>
                </div>
                <div className="programs3">
                    <h2>KEY COMPETENCIES</h2>
                </div>
                <div className="programs4">
                    <h2>IR4.0</h2>
                </div>
        </div>
        
    </>
  )
}

export default HomePageContent3