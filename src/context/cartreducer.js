export const initCart = {
    total:0,
    products:[]
}

export default function cartReducer(cartItems,action){


    switch(action.type){
        case 'addItem':
            return {...cartItems, products: action.payload};
        
        case 'removeItem':
            return {...cartItems,products:action.payload};
        
        case 'updatePrice':
            return {...cartItems, total: action.payload};
        default:{
            throw Error('Unknown action: '+ action.type);
        }
    }



  }