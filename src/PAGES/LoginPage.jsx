import React,{useState,useEffect} from 'react';
import '../components/Loginpage.css';
import { UserLogin } from '../components/UserAPI';
import loginbg from '../images/login_bg.jpg';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc";
import {FaFacebookF,FaApple} from "react-icons/fa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const LoginPage = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword,setInputPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [userHasAuth,setuserHasAuth] = useState(JSON.parse(localStorage.getItem("AuthStatus")));
    
    const nav = useNavigate();

    const handleToggle = () => {
      setIsLogin(!isLogin);
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
   

    const handleInputEmail = (e)=>{
        e.preventDefault();
        setInputEmail(e.target.value);
        console.log(inputEmail);
        
    };
    const handleInputPassword = (e)=>{
        e.preventDefault();
        setInputPassword(e.target.value);
        console.log(inputPassword)
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
        <span onClick={handleToggle} className={isLogin ? 'sIN-active' : 'LS-sIN'}>Sign in</span>
        <span onClick={handleToggle} className={isLogin ? 'sUP' : 'sUP-active'} style={{
          padding: '5px 5px',
          width: '60%',
          borderRadius: '0',
          backgroundColor: '#fff',
          color: '#000',
          cursor: 'pointer',
          fontSize: 'small',
          fontWeight: '400',
          marginBottom: '10px',textAlign:'center'}}>Register</span>
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
            By clicking the submit button below, I hereby agree to and accept the
            following <a href="#">terms and conditions</a> governing my use of the
            Jupeta™ website. I further reaffirm my acceptance of the general
            <a href="#">Privacy Policy</a>
            governing my use of any Jupeta™ website.
          </p>
        </>
      ):(
        <>
          <div className='signupcontainer'>
            <form className='formcontainer'>
              <div className='formitems'>
                <input type='text' placeholder='First Name' className='fnameinput' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <input type='text' placeholder='Last Name' className='lnameinput' onChange={(e) => setLastName(e.target.value)} value={lastName} />
              </div>
              <div className='formitems'>
                <input type='password' placeholder='Password' className='signuppass' onChange={(e) => setPassword(e.target.value)} value={password} />
              </div>
              <div className='passwordhintcontainer'>
                <div>
                  <p style={{fontSize: '0.9rem'}}><FontAwesomeIcon icon={faX} size='sm'></FontAwesomeIcon> Minimum of 8 characters</p>
                </div>
                <div>
                  <p style={{fontSize: '0.9rem'}}><FontAwesomeIcon icon={faX}></FontAwesomeIcon> Uppercase letters, lowercase letters and a number</p>
                </div>
              </div>
              <div className='formitems'>
                <input type='tel' placeholder='Phone Number' className='phoneinput' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
              </div>
              <div className='formitems'>
                <input type='email' placeholder='Email' className='emailinput' onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
              </div>
              <div className='formitems'>
                <input type='date' placeholder='Date of Birth' className='dobinput' onChange={(e) => setBirthDate(e.target.value)} value={birthDate} />
              </div>
              <div>
                <p style={{fontSize: '0.9rem'}}>Get a jUPETA Member Reward on your birthday</p>
              </div>
              <div className='checkboxitems'>
                <input type='checkbox' />
                <p style={{fontSize: '0.9rem'}}>I agree to jUPETA's Privacy Policy and Terms of Use</p>
              </div>
              <div style={{paddingLeft: '100px'}}>
                <button type='submit' className='signupbtn' onClick={handleSubmit}>Create account</button>
              </div>
            </form>
      </div>
        </>
      )}
    </div>
    </div>
    </>
    
  )
  
}


export default LoginPage