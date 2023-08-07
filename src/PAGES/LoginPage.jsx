import React,{useState,useEffect} from 'react';
import '../components/Loginpage.css';
import { UserLogin } from '../components/UserAPI';
import loginbg from '../images/sneaker.jpg';
import { GetAllProdAPI } from '../components/GetAllProdAPI';
import { useNavigate } from 'react-router-dom';

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
      console.log(userHasAuth);
      
    },[]);
  return (
    <>
    <div className="login-body" style={{backgroundImage:`url(${loginbg})`}}>
     <div className="container-login" >
      <div className="head-label">
        <label>Sign in</label>
        <button className="btns">Register</button>
      </div>
      <form id="loginForm" action="#">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" required value={inputEmail} onChange={handleInputEmail}/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
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
      <button type="submit" className="btn" onClick={LoginHandler}>Sign in</button>
      <a className="trob" href="#">Trouble signing in?</a><br/><br/>

      <div className="hr">
        <p>OR</p>
      </div><br/>
      <button type="submit" className="btns">Sign in with Google</button>
      <button type="submit" className="btns">Sign in with Facebook</button>
      <button type="submit" className="btns">Sign in with Apple</button>
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