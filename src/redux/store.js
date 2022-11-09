import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};


const combinedReducer = combineReducers({
  user: userReducer, cart: cartReducer
});

const rootReducer = (state, action) => {
  console.log(action.type)
  if (action.type === 'cart/clearAllCart') {
    state.cart = undefined;
  }else if (action.type === 'use/logoutUser') {
    state.user = undefined;
  }
  return combinedReducer(state, action);
};



//const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);