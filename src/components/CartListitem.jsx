import React from 'react';
import { MdDelete } from 'react-icons/md';


function CartListitem(cart) {
  const {price,productName,imageFileUrl,sellingType,condition, onAdd, productdata,id} = cart;

    return (
        <li className='cartQVLitem'><span className='cqVLImg' style={{backgroundImage:`url(${imageFileUrl})`}}></span><span className='citVNamePrice'><p id='citN'>{productName}</p><br/><p id='citP'>¢{price}</p></span><span className='citVDelete'><MdDelete /></span></li>

      );
}

export default CartListitem;
