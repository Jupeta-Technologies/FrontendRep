import React from 'react';
import '../components/SignUpPage.css';
import { Navbar } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const SignUpPage = () => {
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
            <input type='text' placeholder='First Name' className='fnameinput' />
            <input type='text' placeholder='Last Name' className='lnameinput' />
          </div>
          <div className='formitems'>
            <input type='password' placeholder='Password' className='signuppass' />
          </div>
          <div>
            <p><FontAwesomeIcon icon={faX} size='sm'></FontAwesomeIcon> Minimum of 8 characters</p>
          </div>
          <div>
            <p><FontAwesomeIcon icon={faX}></FontAwesomeIcon> Uppercase letters, lowercase letters and a number</p>
          </div>
          <div className='formitems'>
            <input type='tel' placeholder='Phone Number' className='phoneinput' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
