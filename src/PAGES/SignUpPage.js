import React,{useState} from 'react';
import '../components/SignUpPage.css';
import { Navbar } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom'

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const history = useHistory();

  const signUpResult = async() => {
    let userInfo = {firstName, lastName, password, phoneNumber, userEmail, birthDate};
    console.warn(userInfo)
    let userResult = await fetch("https://ec2-44-197-193-3.compute-1.amazonaws.com/api/User/AddUser",{
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json' 
      }
    })
    userResult = await userResult.json()
    localStorage.setItem("user-info", JSON.stringify(userResult))
    history.push("/")
  }


  return (
    <div>
      <Navbar />
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Now let’s make you a jUPETA member.</h1>
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
              <p><FontAwesomeIcon icon={faX} size='sm'></FontAwesomeIcon> Minimum of 8 characters</p>
            </div>
            <div>
              <p><FontAwesomeIcon icon={faX}></FontAwesomeIcon> Uppercase letters, lowercase letters and a number</p>
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
            <p>Get a jUPETA Member Reward on your birthday</p>
          </div>
          <div className='checkboxitems'>
            <input type='checkbox' />
            <p>I agree to jUPETA's Privacy Policy and Terms of Use</p>
          </div>
          <div className='signupbtncontainer'>
            <button type='submit' className='signupbtn' onClick={signUpResult}>Create account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
