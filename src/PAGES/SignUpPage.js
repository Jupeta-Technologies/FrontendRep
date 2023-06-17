import React from 'react'
import '../components/SignUpPage.css'
import { Navbar } from '../components'

const SignUpPage = () => {
  return (
    <div className='signupcontainer'>
        <form className='formcontainer'>
            <div className='formitems'>
                <input type='text' placeholder='First Name' className='fnameinput'/>
                <input type='text' placeholder='Last Name' className='lnameinput'/>
            </div>
            <div className='formitems'>
                <input type='password' placeholder='Password' className='signuppass'/>
            </div>
        </form>
    </div>
  )
}

export default SignUpPage