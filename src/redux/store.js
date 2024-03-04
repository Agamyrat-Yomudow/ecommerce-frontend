// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../redux/productSlice'

const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

export default store;
