import React from 'react';
import { MdDelete } from 'react-icons/md';
import beats from '../images/beats.jpg';


function CartListitem() {
    return (
        <li className='cartQVLitem'><span className='cqVLImg' style={{backgroundImage:`url(${beats})`}}></span><span className='citVNamePrice'><p>Nike AirMax 270 2022 black and white</p><br/><p>GHC 100.00</p></span><span className='citVDelete'><MdDelete /></span></li>
      );
}

export default CartListitem;
