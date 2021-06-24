import * as actionTypes from './types';

export const addToCart=(itemID)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            id:itemID
        }
    };
};

export const removeFromCart=(itemID)=>{
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:{
            id:itemID
        }
    };
};

export const adjustQty=(itemID,newValue)=>{
    return{
        type:actionTypes.ADJUST_QTY,
        payload:{
            id:itemID,
            qty: newValue
        }
    };
};

export const loadCurrentItem=(item)=>{
    return{
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    };
};

