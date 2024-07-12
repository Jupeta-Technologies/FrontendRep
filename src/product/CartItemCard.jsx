import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function CartItemcard({item}){

    const {addToCart, removeFromcart} = useCart();

    const handleRemove = () =>{
        removeFromcart(item);
    }

    const handleAdd = () => {
        addToCart(item);

    }

    return (
        
            <div className='cartCard'>
                            <div className='cartproductimage'>
                              <img src={item.imageFileUrl} style={{width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply'}} alt={item.productName}/>
                            </div>
                            <div className='cartproductname'>
                              <p>Item number: 31450</p>
                              <h5>{item.productName}</h5>
                              <p>Color: Red</p>
                              <p style={{marginTop: '15px'}}><strong>GHS {item.price}</strong></p>
                            </div>
                            <div className='cartproductprice'>
                              <div className='addsubtract'>
                                <button onClick={handleRemove}>-</button>
                                <h5>{item.qty}</h5>
                                <button onClick={handleAdd}>+</button>
                              </div>
                              <button>Save to wishlist</button>
                              <button>Save for later</button>
                            </div>
                  
                                
                                  <FontAwesomeIcon icon={faTrashCan} color='red' className='cartDelitem' style={{fontSize:'1.3rem', position:'absolute', top:'-7px',right:'-7px', backgroundColor:'#F1DCDC',borderRadius:'50px', padding:'25px 25px 20px 20px', cursor:'pointer'}} onClick={handleRemove}></FontAwesomeIcon>
                                
            
                          </div>
        

    );
}