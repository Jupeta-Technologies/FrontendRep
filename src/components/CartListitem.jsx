import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useCart } from '../context/CartContext';


function CartListitem(cart) {
  const {price,productName,imageFileUrl,sellingType,condition, onAdd, productdata,id} = cart;
  const {removeFromcart} = useCart();

    return (
        <li className='cartQVLitem'><span className='cqVLImg' style={{backgroundImage:`url(${imageFileUrl})`}}></span><span className='citVNamePrice'><p id='citN'>{productName}</p><br/><p id='citP'>¢{price}</p></span><span className='citVDelete'><MdDelete onClick={()=>{ removeFromcart(cart);}} /></span></li>

      );
}

export default CartListitem;
