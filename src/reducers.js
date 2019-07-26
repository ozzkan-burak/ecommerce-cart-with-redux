import {combineReducers} from 'redux';
import CartReducer from './reducers/cartReducer'



const Reducers = combineReducers ({

  cart: CartReducer

});

export default Reducers;