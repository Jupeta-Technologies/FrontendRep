import React,{useState,useEffect} from 'react';
import '../components/Loginpage.css';
import { UserLogin } from '../components/UserAPI';
import loginbg from '../images/login_bg.jpg';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc";
import {FaFacebookF,FaApple} from "react-icons/fa"

const LoginPage = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword,setInputPassword] = useState('');
    const [userHasAuth,setuserHasAuth] = useState(JSON.parse(localStorage.getItem("AuthStatus")));
    
    const nav = useNavigate();
   

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
        <button className="btns">Sign in</button>
        <button className="btns">Register</button>
      </div>
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
      <div className='signin-trob'><button type="submit" className="signin-btn" onClick={LoginHandler}>Sign in</button>
      <a className="trob" href="#">Trouble signing in?</a></div>

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
    </div>
    </div>
    </>
    
  )
  
}


export default LoginPage