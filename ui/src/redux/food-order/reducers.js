import * as actionTypes from './types';

const INITIAL_STATE={
    products:[{
        id: 1,
        title: 'Hamburger',
        price: '1.50..'
    }],
    cart: [],
    currentItem: null
}


const foodReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            //e mer item
            const item = state.products.find(prod=>prod.id === action.payload.id);
            //check nese qeky item ekziston ne cart
            const inCart = state.cart.find(item=>item.id === action.payload.id ? true : false);
            return{
                ...state,
                cart: inCart ? state.cart.map(item=> item.id === action.payload.id? {...item,qty:item.qty+1} : item) : [...state.cart, {...item, qty: 1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item=> item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty}: item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItem: action.payload
            }
        default: 
            return state;
    }
}

export default foodReducer;