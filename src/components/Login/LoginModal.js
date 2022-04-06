import React, {useState , useRef} from 'react';
import { Link } from 'react-router-dom';
import "../Login/Modal.css";

import logo from '../../Assets/Images/teacher.png'
import logo2 from '../../Assets/Images/Students.png'
import Axios  from 'axios';
// import ProfilePic from '../Assets/Images/Ellipse -6.png'



const LoginModal = ( {setShowModal, setDisplay} ) => {

const modalRef = useRef();
const closeModal = (e) => {
    if (e.target === modalRef.current) {
        setShowModal(false);
    }
    };


const [studentEmail, setStudentEmail] = useState("")
const [studentPassword, setStudentPassword] = useState("")

const [teacherEmail, setTeacherEmail] = useState("")
const [teacherPassword, setTeacherPassword] = useState("")

const [loginStatus, setLoginStatus] = useState("")
const [teacherLoginStatus, setTeacherLoginStatus] = useState("")




const studentLogin = () => {

    Axios.post('http://localhost:4000/login/student', {
        email:studentEmail,
        password:studentPassword,
    })
    .then((response) => {
        console.log(response)
        if ( response.data.message){
            setLoginStatus(response.data.message)
        } else {
            setLoginStatus((response.data[0].Name))
        }
    })
};


const teacherLogin = () => {

    Axios.post('http://localhost:4000/login/teacher', {
        email:teacherEmail,
        password:teacherPassword,
    })
    .then((response) => {
        console.log(response)
        if ( response.data.message){
            setTeacherLoginStatus(response.data.message)
        } else {
            setTeacherLoginStatus((response.data[0].Name))
        }
    })
};




  return (
    <div className='modalBackground' ref={modalRef} onClick={closeModal}>
        <div className='modalContainer'><br/>
            <div className='student'>
                <div><img src={logo2} alt=" students"/></div>
            </div>
            <div className='students'>
                <h2>Students</h2>
            </div>
            <div className='login-sigup'>
                <div><Link className='login1' to="/login">LOG IN</Link></div>
                <div><Link className='signup1' to="/signup">SIGN UP</Link></div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="Email"></label>
                        <input onChange={(event) => {
                            setStudentEmail(event.target.value);
                        }} type="text" name="Email" placeholder="Email Address" />
                    </div>
                </div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input onChange={(event) => {
                            setStudentPassword(event.target.value);
                        }} type="password" name="password" placeholder="Password" />
                    </div>
                </div>
            </div>
            
            <div className='footer'>
                <button onClick={studentLogin} >LOG IN</button>
                
            </div>
            <div className='status' ><h1>{loginStatus}</h1>
            {/* <img src={setLoginStatus('')} alt="" /> */}
            </div>

        </div>



        {/* -------------------------------------------------------------------------------------------------------- */}


        <div className='modalContainer1'>
            <div className='titleCloseBtn'>
                <button onClick={() => setShowModal(false)}> X </button>
            </div>
            
            <div className='teacherPic'>
                <div><img src={logo} alt="Teachers"/></div>
                
            </div>
            <div className='students'>
                <h2>Teachers</h2>
            </div>
            <div className='login-sigup'>
                <div><Link className='login1' to="/login">LOG IN</Link></div>
                <div><Link className='signup1' to="/signup">SIGN UP</Link></div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="Email"></label>
                        <input onChange={(event) => {
                            setTeacherEmail(event.target.value);
                        }} type="text" name="Email" placeholder="Email Address" />
                    </div>
                </div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input onChange={(event) => {
                            setTeacherPassword(event.target.value);
                        }} type="password" name="password" placeholder="Password" />
                    </div>
                </div>
            </div>
            
            <div className='footer'>
                <button onClick={teacherLogin} >LOG IN</button>
            </div>
            <div className='status' ><h1>{ teacherLoginStatus }</h1>
            {/* <img src={ProfilePic} alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default LoginModal;