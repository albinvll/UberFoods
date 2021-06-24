import { combineReducers } from "redux";
import foodReducer from './food-order/reducers'

const rootReducer = combineReducers({
    food: foodReducer
});

export default rootReducer;