import React from 'react';
import { Navbar, Footer, SignUp,BecomeMember } from '../components';

const becomeMemberPage = () => {
    return (
        <div>
           <Navbar />
           <BecomeMember />
        
          <SignUp />
          <Footer />
        </div>
      );
    };
export default becomeMemberPage