import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist"; //[Study] add in order to persist the state in localstorage

const applyMiddlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...applyMiddlewares));
const persistor = persistStore(store);

export { store, persistor };