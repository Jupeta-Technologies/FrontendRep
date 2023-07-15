import React,{useState} from 'react';
import '../components/Loginpage.css';
import { UserLogin } from '../components/UserAPI'

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
    <div>
        
            <div className="container">
                <h1>Login</h1>
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
            </div>
    </div>
    
  )
  
}


export default LoginPage