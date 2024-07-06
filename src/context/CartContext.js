import { createContext, useContext, useReducer, useEffect} from "react";
import cartReducer, { initCart } from "./cartreducer";

const CartContext = createContext(null);



export function CartProvider({children}) {
    
    const [cartItems, dispatch] = useReducer(cartReducer, initCart);

    const addToCart = (product) =>{
      const updateCart = cartItems.products;
      updateCart.push(product);

      cartTotal(updateCart);

      dispatch({
          type:"addItem",
          payload: updateCart
      });
    }

    const removeFromcart = (product) =>{
      const updateCart = cartItems.products.filter((currItems)=> currItems.id !== product.id );

      cartTotal(updateCart);

      dispatch({
        type:"removeItem",
        payload: updateCart
      });
    }

    const cartTotal = (products) => {
      let  total = 0;
      products.forEach(product => { total += product.price });

      dispatch({
        type:"updatePrice",
        payload:total

      });

    }

    const value = {
      total: cartItems.total,
      products: cartItems.products,
      addToCart,
      removeFromcart,
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



 
