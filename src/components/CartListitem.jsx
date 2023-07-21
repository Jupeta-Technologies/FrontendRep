import React from 'react';
import { MdDelete } from 'react-icons/md';


function CartListitem(data) {
    return (
        <li className='cartQVLitem'><span className='cqVLImg' style={{backgroundImage:`url(${data.imgsrc})`}}></span><span className='citVNamePrice'><p id='citN'>{data.itemName}</p><br/><p id='citP'>GHC 100.00</p></span><span className='citVDelete'><MdDelete /></span></li>

      );
}

export default CartListitem;