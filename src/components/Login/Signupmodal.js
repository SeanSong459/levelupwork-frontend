import React, {useState , useRef} from 'react'
import "../Login/Modal.css";
import logo from '../../Assets/Images/teacher.png'
import logo2 from '../../Assets/Images/Students.png'
import { Link } from 'react-router-dom';
import Axios from 'axios'


const Signupmodal = ({setShowModal}) => {

const modalRef = useRef();
const closeModal = (e) => {
    if (e.target === modalRef.current) {
        setShowModal(false);
    }
    };

const [studentfullname, setfullname] = useState("")
const [studentsignupemail, setSignupemail] = useState("")
const [studentsignuppassword, setSignuppassword] = useState("")
const [studentconfirmpassword, setConfirmpassword] = useState("")

const [teacherfullname, setTeacherfullname] = useState("")
const [teachersignupemail, setTeacherSignupemail] = useState("")
const [teachersignuppassword, setTeacherSignuppassword] = useState("")
const [teacherconfirmpassword, setTeacherConfirmpassword] = useState("")

const studentsignup = () => {

Axios.post('http://localhost:4000/signup/student', {
    fullname: studentfullname,
    signupemail: studentsignupemail,
    signuppassword: studentsignuppassword,
    confirmpassword: studentconfirmpassword, 
}).then((response) => 
    console.log(response))
    .catch(function (error) {
        console.log(error);
        });    
    };

const TeacherSignUp = () => {
    Axios.post('http://localhost:4000/signup/teacher', {
        fullname: teacherfullname,
        signupemail: teachersignupemail,
        signuppassword: teachersignuppassword,
        confirmpassword: teacherconfirmpassword
    }).then((response) => 
    console.log(response))
    .catch(function (error) {
        console.log(error);
        });   
};

// Axios.post('http://localhost:4000/signup', {
//     fullname: fullname,
//     signupemail: signupemail,
//     signuppassword: signuppassword,
//     confirmpassword: confirmpassword
// }).then((response) => 
//         console.log(response.data))
//         .catch(function (error) {
//         console.log(error);
//         });


// const validate = () => {
//         if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

//             if (input["password"] != input["confirm_password"]) {
        
//             isValid = false;
        
//             errors["password"] = "Passwords don't match.";
        
//             }
// };


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
                <div className='login'><Link className='login2' to="/login">LOG IN</Link></div>
                <div className='signup'><Link className='signup2' to="/signup">SIGN UP</Link></div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="fullName"></label>
                        <input onChange={(event) => {
                            setfullname(event.target.value)}}   type="text" name="fullName" placeholder="Full Name" />
                    </div>
                </div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="Email"></label>
                        <input onChange={(event) => {
                            setSignupemail(event.target.value)}} type="text" name="Email" placeholder="Email Address" />
                    </div>
                </div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input onChange={(event) => {
                            setSignuppassword(event.target.value)}} type="password" name="password" placeholder="Password" />
                    </div>
                </div>
            </div><div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="confirm-password"></label>
                        <input onChange={(event) => {
                            setConfirmpassword(event.target.value)}} type="password" name="confirm-password" placeholder="Confirm Password" />
                    </div>
                </div>
            </div>
            
            <div className='footer'>
                <button onClick={studentsignup} >SIGN UP</button>
            </div>
            
        </div>
        {/* ------------------------------------------------------------------------------------------------------ */}





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
                <div className='login'><Link className='login2' to="/login">LOG IN</Link></div>
                <div className='signup'><Link className='signup2' to="/signup">SIGN UP</Link></div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="fullName"></label>
                        <input onChange={(event) => {
                            setTeacherfullname(event.target.value)}} type="text" name="FullName" placeholder="Full Name" />
                    </div>
                </div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="Email"></label>
                        <input onChange={(event) => {
                            setTeacherSignupemail(event.target.value)}} type="text" name="Email" placeholder="Email Address" />
                    </div>
                </div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input onChange={(event) => {
                            setTeacherSignuppassword(event.target.value)}} type="password" name="password" placeholder="Password" />
                    </div>
                </div>
            </div>
            <div className='form'>
                <div>
                    <div className="form-group">
                        <label htmlFor="confirm-password"></label>
                        <input onChange={(event) => {
                            setTeacherConfirmpassword(event.target.value)}} type="password" name="confirm-password" placeholder="Confirm Password" />
                    </div>
                </div>
            </div>
            
            
            <div className='footer'>
            {/* <Link to="/TeacherProgressTracker"><button >SIGN UP</button></Link> */}
            <button onClick={TeacherSignUp} >SIGN UP</button>
            </div>
            
        </div>
    </div>
  )
}


export default Signupmodal;