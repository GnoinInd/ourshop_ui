import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk'; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';
import OrderpageReducer from './orderpageReducer'

const persistConfig = {
  key: 'root',
  storage,
};

const combinedReducers = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  orderitems:OrderpageReducer,

});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));

const persistor = persistStore(store);

export { store, persistor };
