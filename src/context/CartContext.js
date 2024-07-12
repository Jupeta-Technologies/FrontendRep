import { createContext, useContext, useReducer, useEffect} from "react";
import cartReducer, { initCart } from "./cartreducer";

const CartContext = createContext(null);



export function CartProvider({children}) {
    
    const [cartItems, dispatch] = useReducer(cartReducer, initCart);

    const addToCart = (product) =>{
      const exists = cartItems.products.find(x => x.id === product.id);
      const updateCart = cartItems.products;
      var updateQty = [];
      if(exists){updateQty = updateCart.map(x => x.id === product.id?{...exists,qty: exists.qty +1}:x);
            cartTotal(updateQty);
    }
      else{updateCart.push({...product, qty: 1});
            cartTotal(updateCart);
          }
      

      dispatch({
          type:"addItem",
          payload: exists?updateQty:updateCart
      });
    }

    const removeFromcart = (product) =>{
      const checkQty = cartItems.products.find(x => x.qty > 1);
      console.log(checkQty);
      var updateCart = [];
      if(checkQty){
        updateCart = cartItems.products.map(x => x.id === product.id?{...checkQty,qty: checkQty.qty -1}:x);

        cartTotal(updateCart);
      }
      else{
        updateCart = cartItems.products.filter((currItems)=> currItems.id !== product.id );
        cartTotal(updateCart);
      }

      

      dispatch({
        type:"removeItem",
        payload: updateCart
      });
    }

    const cartTotal = (products) => {
      let  total = 0;
      products.forEach(product => { total += product.price * product.qty });

      dispatch({
        type:"updatePrice",
        payload:total

      });

    }

    const value = {
      total: cartItems.total,
      products: cartItems.products,
      addToCart,
      removeFromcart
    }
    /*/DO NOT TOUCH THIS CODE ==>
        useEffect(()=>{
            const data = JSON.parse(localStorage.getItem("Cart"));
            localStorage.setItem("Cart",JSON.stringify(data));
            //initCart === null && (cartItems == data);
          },[initCart]);
        
          useEffect(()=>{
            console.log(cartItems);
            localStorage.setItem("Cart",JSON.stringify(cartItems));
          },[cartItems]);
    */

    return(
        <CartContext.Provider value={value}>
                    {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}



 
