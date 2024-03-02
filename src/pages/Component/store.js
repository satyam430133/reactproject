import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ProductReducer from './ProductSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, ProductReducer);

const store = configureStore({
  reducer: {
    addtocart: persistedReducer,
  }
});

const persistor = persistStore(store);

export { store, persistor }; // Exporting both store and persistor
