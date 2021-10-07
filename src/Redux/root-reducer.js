import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer"; 
import CartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import { persistReducer } from "redux-persist"; 
import storage from 'redux-persist/lib/storage';//[Study] add in order to persist the state in localstorage



const persistConfig = {
    key : 'root', // in localstorage it will be persist:key as item key
    storage, //localstorage can be session one 
    whiteList : ['cart','directory']//reducer to be persisted 
}
const rootReducer =  combineReducers(
    {
        user:UserReducer ,
        cart:CartReducer ,
        directory : directoryReducer,
        shop : shopReducer
    }
);

export default persistReducer (persistConfig,rootReducer);