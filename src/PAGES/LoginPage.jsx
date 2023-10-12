import React,{useState,useEffect} from 'react';
import '../components/Loginpage.css';
import { UserLogin } from '../components/UserAPI';
import loginbg from '../images/login_bg.jpg';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc";
import {FaFacebookF,FaApple} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BsCheck2Circle,BsFillEyeFill} from "react-icons/bs";

import { faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const LoginPage = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword,setInputPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [isSignUp, setIsSignUp] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [userHasAuth,setuserHasAuth] = useState(JSON.parse(localStorage.getItem("AuthStatus")));
    const [sUPEmail,setsUPEmail] = useState("");
    const [emailVerified,setemailVerified] = useState(false);
    const [emailValid,setemailValid] = useState(false);
    const [emailVericode,setemalVericode] = useState("");
    
    const nav = useNavigate();

    const handleLoginToggle = () => {
      setIsLogin(true);
      setIsSignUp(false);
    };

    const handleSignUpToggle = () => {
      setIsSignUp(true);
      setIsLogin(false);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      //let userInfo = {firstName, lastName, password, phoneNumber, userEmail, birthDate};
      axios.post("https://ec2-44-197-193-3.compute-1.amazonaws.com/api/User/AddUser", {
        firstName:firstName,
        lastName:lastName,
        email: userEmail,
        password:password,
        phoneNumber:phoneNumber,
        dateOfBirth: birthDate.toString()
      }, {
        headers:{"Content-Type":"application/json"}
      }).then((res) => {
        console.log('Posting data: ', res)
      }).catch((err) => {
        console.log(err)
      })
    }
   
    
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    const handlesUPemail = (e) =>{
      e.preventDefault();
      const email = e.target.value;
      setsUPEmail(email);
      setUserEmail(email);
      validateEmail(sUPEmail)?setTimeout(()=>{setemailValid(true)},1000):setemailValid(false);
    
    }

    const handleEVeriCode = (e) =>{
      e.preventDefault();
      const veriCode = e.target.value;
      setemalVericode(veriCode);
      veriCode.length == 6?setemailVerified(true):setemailVerified(false);
    }

    const handleInputEmail = (e)=>{
        e.preventDefault();
        setInputEmail(e.target.value);
        
    };
    const handleInputPassword = (e)=>{
        e.preventDefault();
        setInputPassword(e.target.value);
    };
    const LoginHandler = () => {

        UserLogin({
            email:inputEmail.toLocaleLowerCase(),
            passwordHash:inputPassword
        }).then((data) => {
            if(data.status === 200){
                setuserHasAuth(true);
                localStorage.setItem("AuthStatus",JSON.stringify(true));
                console.log(userHasAuth);
                nav('/');
                
                console.log(data.data.responseData);
                
            }else{console.log("User not found");}
        }).catch(err => {console.error(err); console.log("User not found");});
    }

    useEffect(() =>{
      //console.log(userHasAuth);
      
    },[]);
  return (
    <>
    <div className="login-body" style={{backgroundImage:`url(${loginbg})`}}>
     <div className="container-login" >
      <div className="head-label">
        <span onClick={handleLoginToggle} className={isLogin ? 'sIN-active' : 'LS-sIN'} >Sign in</span>
        <span onClick={handleSignUpToggle} className={isSignUp ? 'sUP-active':'LS-sUP' } >Register</span>
      </div>
      {isLogin ? (
        <>
          <form id="loginForm" action="#">
          <div className="form-ctrl">
            <label htmlFor="email" style={inputEmail !== ""?{color:'#000',transform:'translate(5px,-10px )',backgroundColor:'#FFF',lineHeight:'15px', padding:'0px 5px'}:null}>Email</label>
            <input type="email" id="email" placeholder="" required value={inputEmail} onChange={handleInputEmail}/>
          </div>
          <div className="form-ctrl">
            <label htmlFor="password" style={inputPassword !== ""?{color:'#000',transform:'translate(5px,-10px )',backgroundColor:'#FFF',lineHeight:'15px', padding:'0px 5px'}:null}>Password</label>
            <input
              type="password"
              id="password"
              placeholder=""
              required  value={inputPassword} onChange={handleInputPassword}/>
          </div>
          </form>

          <div className="forget-stay">
            <div className="stay">
              <input type="checkbox" name="" id="stay" />
              <label htmlFor="stay">Stay signed in</label>
            </div>
            <div>
              <a href="#">Forget your password?</a>
            </div>
          </div>
          <div className='signin-trob'>
            <button type="submit" className="signin-btn" onClick={LoginHandler}>Sign in</button>
            <a className="trob" href="#">Trouble signing in?</a>
          </div>

          <div className="hr">
            <p>OR</p>
          </div><br/>
          <button type="submit" className="btns"><span><FcGoogle /></span>Sign in with Google</button>
          <button type="submit" className="btns"><span style={{color:'#3B5998'}}><FaFacebookF /></span> Sign in with Facebook</button>
          <button type="submit" className="btns"><span><FaApple /></span>Sign in with Apple</button>
          <p className="terms">
            By clicking the submit button, I hereby agree to and accept the
            following <a href="#">terms and conditions</a> governing my use of the
            Jupeta™ website. I further reaffirm my acceptance of the general <a href="#">Privacy Policy</a> governing my use of any Jupeta™ website.
          </p>
        </>
      ):(
        <>
          <h5>Create account</h5>
          {!emailValid?(
            <>
            <span><b>Now let’s make you a jUPETA member.</b></span>
            <p style={{textAlign:'left'}}>Please enter your email address to create account</p>
            <div className="form-ctrl">
            <input type="email" id="email" placeholder="Enter email address" required value={sUPEmail} onInput={handlesUPemail}/>
            </div>
          </>):
            
              !emailVerified?(<>
                              <span>We've sent a verification code to</span>
                              <p><b>{sUPEmail}</b></p>
                              <div className="form-ctrl">
                              <input type='text' minLength={6} maxLength={6} value={emailVericode} onInput={handleEVeriCode} required/>
                              </div>
                              </>):
            (
              <>
              <span>Email address verified</span>
            <p><b>{sUPEmail}</b> <span style={{color:"green", fontSize:'30px',position:'absolute'}}><BsCheck2Circle /></span></p>
            <form className='formcontainer'>
              <div className='form-ctrl'>
                <input type='text' placeholder='First Name'  onChange={(e) => setFirstName(e.target.value)} value={firstName} required/>
                <input type='text' placeholder='Last Name'  onChange={(e) => setLastName(e.target.value)} value={lastName} required/>
                <input type='password' placeholder='Password'  onChange={(e) => setPassword(e.target.value)} value={password} required/><span style={{position:'absolute', right:'40px', cursor:'pointer',marginTop:'12px',fontSize:'18px'}}><BsFillEyeFill /></span>
              <div className='passwordhintcontainer'>
                  <p style={{fontSize: '0.9rem'}}><FontAwesomeIcon icon={faX} size='sm'></FontAwesomeIcon> Minimum of 8 characters</p>
              </div>
              
                <input type='password' placeholder='Confirm password' onChange={(e) => setconfPassword(e.target.value)} value={confPassword}  required/><span style={{position:'absolute', right:'40px', cursor:'pointer',marginTop:'12px',fontSize:'18px'}}><BsFillEyeFill /></span>
                <input type='tel' placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} required/>

                <input type='date' placeholder='Date of Birth'  onChange={(e) => setBirthDate(e.target.value)} value={birthDate} required/>
              </div>
              <div>
                <p style={{fontSize: '0.9rem'}}>Get a jUPETA Member Reward on your birthday</p>
              </div>
              <div className='checkboxitems'>
                <input type='checkbox' required/>
                <p style={{fontSize: '0.9rem'}}>I agree to jUPETA's Privacy Policy and Terms of Use</p>
              </div>
              
                
            </form>
            <button type='submit' className='signupbtn' onClick={handleSubmit}>Create account</button>
            </>)
            
          }
          
        </>
      )}
    </div>
    </div>
    </>
    
  )
  
}


export default LoginPage