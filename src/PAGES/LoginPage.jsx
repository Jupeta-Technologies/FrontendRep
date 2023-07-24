import React,{useState} from 'react';
import '../components/Loginpage.css';
import { UserLogin } from '../components/UserAPI';
import loginbg from '../images/sneaker.jpg';

const LoginPage = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword,setInputPassword] = useState('');
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
        }).then((responds) => {
            if(responds.status === 200){
                console.log(responds.data);
            }else{console.log("User not found");}
        }).catch(err => {console.error(err); console.log("User not found");});
    }
  return (
    <>
    <div className="login-body" style={{backgroundImage:`url(${loginbg})`}}>
     <div class="container-login" >
      <div class="head-label">
        <label>Sign in</label>
        <button class="btns">Register</button>
      </div>
      <form id="loginForm" action="#">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" required value={inputEmail} onChange={handleInputEmail}/>
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required  value={inputPassword} onChange={handleInputPassword}/>
        </div>
      </form>

      <div class="forget-stay">
        <div class="stay">
          <input type="checkbox" name="" id="stay" />
          <label for="stay">Stay signed in</label>
        </div>
        <div>
          <a href="#">Forget your password?</a>
        </div>
      </div>
      <button type="submit" class="btn" onClick={LoginHandler}>Sign in</button>
      <a class="trob" href="#">Trouble signing in?</a><br/><br/>

      <div class="hr">
        <p>OR</p>
      </div><br/>
      <button type="submit" class="btns">Sign in with Google</button>
      <button type="submit" class="btns">Sign in with Facebook</button>
      <button type="submit" class="btns">Sign in with Apple</button>
      <p class="terms">
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

/*
<form id="loginForm" action="#" className='loginForm'>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name='useremail' placeholder="Enter Email" required value={inputEmail} onChange={handleInputEmail}/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                <   input type="password" id="password" name='userpass' placeholder="Enter Password" required value={inputPassword} onChange={handleInputPassword}/>
                </div>
                <button type="submit" className="loginbtn" onClick={LoginHandler}>Login</button>
                </form>

*/


export default LoginPage