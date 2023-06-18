import React from 'react';
import '../components/SignUpPage.css';
import { Navbar, Footer } from '../components';

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
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
