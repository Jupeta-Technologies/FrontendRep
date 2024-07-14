import React,{useState,useEffect} from 'react';
import '../components/Loginpage.css';
import { UserLogin, GetRegistration_OTP, VerifyReg_OTP  } from '../APIs/UserAPI';
import loginbg from '../images/login_bg.jpg';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc";
import {FaFacebookF,FaApple} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BsCheck2Circle,BsFillEyeFill,BsFillEyeSlashFill,BsFillArrowRightCircleFill,BsFillCheckCircleFill} from "react-icons/bs";
import {PiWarningCircleFill} from 'react-icons/pi';
import { AiOutlineClose } from "react-icons/ai";

import { faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { green } from '@mui/material/colors';


const LoginPage = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword,setInputPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [isSignUp, setIsSignUp] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword,setconfPassword] = useState("");
    const [showsUPPass, setsUPShowP] = useState(false);
    const [showConfPass, setsUPShowCP] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [userHasAuth,setuserHasAuth] = useState(JSON.parse(localStorage.getItem("AuthStatus")));
    const [sUPEmail,setsUPEmail] = useState("");
    const [emailVerified,setemailVerified] = useState(false);
    const [emailValid,setemailValid] = useState(false);
    const [emailVericode,setemalVericode] = useState("");
    const [inputEC,setinputEC] = useState(false);
    const [regCompleted, setregCompleted] = useState(false);
    const [psdChcked,setpsdChcked] = useState("");
    
    const nav = useNavigate();

    const handleLoginToggle = () => {
      setIsLogin(true);
      setIsSignUp(false);
    };

    const handleSignUpToggle = () => {
      setIsSignUp(true);
      setIsLogin(false);
    };

    //Account registration submission 
    const handleSubmit = (e) => {
      e.preventDefault();
      //let userInfo = {firstName, lastName, password, phoneNumber, userEmail, birthDate};
      axios.post("https://jupeta-project.onrender.com/api/User/AddUser", {
        firstName:firstName,
        lastName:lastName,
        email: userEmail,
        password:password,
        phoneNumber:phoneNumber,
        dateOfBirth: birthDate.toString()
      }, {
        headers:{"Content-Type":"application/json"}
      }).then((res) => {
        console.log('Posting data: ', res);
        //handleLoginToggle();
        setregCompleted(true);
      }).catch((err) => {
        console.log(err)
      })
    }
   
    
    const validateEmail = (email) => {
      return email.match(
        // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        /^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|info|edu)\b)$/
      );
    };

    const passwordFrmt = (pswd) =>{
        var pswdChk = ""

        if( 8 <= pswd.length && pswd.length <= 32  )
              {
                  if(!(/(?=.*[0-9])/).test(pswd) )
                    pswdChk = "Must contain a number";
                  else if(!(/(?=.*[a-z])/).test(pswd))
                    pswdChk = "Must contain lower case letter";
                  else if(!(/^(?=.*[A-Z])/).test(pswd) )
                    pswdChk = "Must conatin upper case letter";
                  else if(!(/^(?=.*[#?!@$%^&*-])/).test(pswd))
                    pswdChk = "Must contain a symbol";
              }else{pswdChk = "Minimum 8 charaters"}
        console.log(pswdChk);
        return pswdChk;
    }

    

    const confirmPasswd = (cpasswd) =>{
      return cpasswd.match(password);
    }

    const handlesUPPASSvis = () =>{
      setsUPShowP(!showsUPPass);
    }
    const handlesUPConfPvis = () =>{
      setsUPShowCP(!showConfPass);
    }

    const handlesUPemail = (e) =>{
      e.preventDefault();
      const email = e.target.value;
      setsUPEmail(email);
      setUserEmail(email);
      validateEmail(email)?setinputEC(true):setinputEC(false);
    }
    const checkEmail = ()=>{
      GetRegistration_OTP({
        email:sUPEmail
      }).then((res)=>{
      console.log("Getting OTP :", res);
      setTimeout(()=>{setemailValid(true)},5000)});
      
      //setTimeout(()=>{setemailValid(true)},5000);
      
    }

    ///inputEC&&checkEmail(); automatically move to next step in account creation
    //Check sign-up email is a valid email format on button click
    const checksUPemail = ()=>{
      validateEmail(sUPEmail)?checkEmail():validateEmail(sUPEmail);
    }
    const handleEVeriCode = (e) =>{
      e.preventDefault();
      const veriCode = e.target.value;
      setemalVericode(veriCode);
      veriCode.length == 4?
      setTimeout(()=>{VerifyReg_OTP({otp:veriCode, email:sUPEmail}).then((res)=>{ console.log(res.data); (res.status == 200 && res.data.code == "0") && setemailVerified(true)})},5000) :setemailVerified(false);
    };

    const handleInputEmail = (e)=>{
        e.preventDefault();
        setInputEmail(e.target.value);
        
    };
    const handleInputPassword = (e)=>{
        e.preventDefault();
        setInputPassword(e.target.value);
    };

    const handlesUPPwd=(e)=>{
      e.preventDefault();
      setPassword(e.target.value);
      setpsdChcked(passwordFrmt(e.target.value));
    }
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

    const dummyReg =()=>{
      setregCompleted(true);
    }

    useEffect(() =>{
      //console.log(userHasAuth);
      
    },[]);
  return (
    <>
    <div className="login-body" style={{backgroundImage:`url(${loginbg})`}}>
      <AiOutlineClose style={{padding:'4px', borderRadius:'50%', background:'#FFF',color:'#000',position:'absolute', right:'16px', top:'16px', fontSize:'2rem', cursor:'pointer'}} onClick={()=>window.history.back()}/>
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
            <input type="email" id="email" placeholder="" required value={inputEmail} onChange={handleInputEmail} autoComplete='email'/>
          </div>
          <div className="form-ctrl">
            <label htmlFor="password" style={inputPassword !== ""?{color:'#000',transform:'translate(5px,-10px )',backgroundColor:'#FFF',lineHeight:'15px', padding:'0px 5px'}:null}>Password</label>
            <input
              type="password"
              id="password"
              placeholder=""
              required autoComplete='current-password' value={inputPassword} onChange={handleInputPassword} />
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
          <div className="socialAuth">
          <div><button type="submit" className="btns"><span><FcGoogle /></span></button><span>Google</span></div>
          <div><button type="submit" className="btns"><span style={{color:'#3B5998'}}><FaFacebookF /></span></button><span>Facebook</span></div>
          <div><button type="submit" className="btns"><span><FaApple /></span></button><span>Apple</span></div>
          </div>
          <p className="terms">
            By clicking the submit button, I hereby agree to and accept the
            following <a href="#">terms and conditions</a> governing my use of the
            Jupeta™ website. I further reaffirm my acceptance of the general <a href="#">Privacy Policy</a> governing my use of any Jupeta™ website.
          </p>
        </>
      ):isSignUp?(
        <>
          {!regCompleted&&<h5>Create account</h5>}
          {!emailValid?(
            <>
            <span style={{fontSize:'0.9rem'}}><b>Now let’s make you a jUPETA member.</b></span>
            <p style={{textAlign:'left',fontSize:'0.9rem'}}>Please enter your email address to create account</p>
            <div className="form-ctrl">
            <input type="email" id="email" placeholder="Enter email address" required value={sUPEmail} onChange={handlesUPemail} style={inputEC? {border:"1px solid green"}:(!emailValid&&sUPEmail!==''?{border:"1px solid red",boxShadow:'inset 0px 0px 5px red'}:null)}/>
            {!inputEC&& sUPEmail !==""?<span style={{display:'inline-flex', flexDirection:'row', alignItems:'center',color:'red'}}><PiWarningCircleFill /> <span style={{fontSize:'0.8rem',marginLeft:'5px'}}>Email is invalid</span></span>:""}
            </div>
            <BsFillArrowRightCircleFill className='validEmail' onClick={checksUPemail} type='submit'/>
          </>):
            
              !emailVerified?(<>
                              <span>We've sent a verification code to</span>
                              <p><b>{sUPEmail}</b><span style={{textDecoration:'underline', marginLeft:'5px', fontWeight:'400', cursor:'pointer'}} onClick={()=>{setemailValid(false)}}>edit</span></p>
                              <div className="form-ctrl">
                              <input type='text' minLength={4} maxLength={4} placeholder='Enter code' value={emailVericode} onInput={handleEVeriCode} required/>
                              </div>
                              </>
                              ):emailVerified && !regCompleted?
            (
              <>
              <span>Email address verified</span>
            <p><b>{sUPEmail}</b> <span style={{color:"green", fontSize:'30px',position:'absolute'}}><BsCheck2Circle /></span></p>
            <form className='formcontainer'>
              <div className='form-ctrl'>
                <input type='text' placeholder='First Name'  onChange={(e) => setFirstName(e.target.value)} value={firstName} required/>
                
                <input type='text' placeholder='Last Name'  onChange={(e) => setLastName(e.target.value)} value={lastName} required/>
                
                <input type={!showsUPPass?'password':'text'} placeholder='Password'  onChange={handlesUPPwd} value={password} required style={{paddingRight:'50px'}}/><span style={{position:'absolute', right:'40px', cursor:'pointer',marginTop:'12px',fontSize:'18px'}}><BsFillEyeSlashFill onClick={handlesUPPASSvis} /></span>
                {password !== "" && psdChcked !== "" ?<span style={{display:'inline-flex', flexDirection:'row', alignItems:'center',color:'red'}}><PiWarningCircleFill /> <span style={{fontSize:'0.7rem'}}>{psdChcked}</span></span>:""} 
                
                <input type={!showConfPass?'password':'text'} placeholder='Confirm password' onChange={(e) => {setconfPassword(e.target.value); confirmPasswd(confPassword);}} value={confPassword}  required style={{paddingRight:'50px'}}/><span style={{position:'absolute', right:'40px', cursor:'pointer',marginTop:'12px',fontSize:'18px'}}>{!showConfPass?<BsFillEyeSlashFill onClick={handlesUPConfPvis} />:<BsFillEyeFill onClick={handlesUPConfPvis} />}</span>
                {!confirmPasswd(confPassword)&& confPassword !==""?<p style={{color:'red',fontSize:'0.7rem',padding:'5px 10px 10px', lineHeight:'2px'}}>Password does not match</p>:""}
                
                <input type='tel' placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} required/>

                <input type='date' placeholder='Date of Birth'  onChange={(e) => setBirthDate(e.target.value)} value={birthDate} required/>
              </div>
              {/* <div>
                <p style={{fontSize: '0.9rem'}}>Get a jUPETA Member Reward on your birthday</p>
              </div> */}
              <div className='checkboxitems'>
                <input type='checkbox' required/>
                <p style={{fontSize: '0.9rem'}}>I agree to jUPETA's Privacy Policy and Terms of Use</p>
              </div>
              
                
            </form>
            <button type='submit' className='signupbtn' onClick={handleSubmit}>Create account</button>
            </>)
            :regCompleted?
            <>
            <BsFillCheckCircleFill style={{color:'green', fontSize:'3rem'}} />
            <h5>You are all set!</h5>
            <p style={{textAlign:'center'}}>Confirmation email has been sent to <b>{sUPEmail}</b></p>
            <span style={{textDecoration:'underline', fontWeight:'400', cursor:'pointer'}} onClick={()=>{window.location.reload();}}>Sign-in</span>
            </>:null
              }
          
        </>
      ):null}
    </div>
    </div>
    </>
    
  )
  
}


export default LoginPage