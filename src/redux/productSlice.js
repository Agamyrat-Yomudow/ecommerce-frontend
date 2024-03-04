// src/features/productsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    filteredProducts: [],
    bestSellerProducts: [],
    
  };


export const productsSlice = createSlice({
  name: 'products',
 initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProductsByCategory: (state, action) => {
      const category = action.payload;
      state.filteredProducts = state.products.filter((product) => product.category === category);
    },
    
    



    sortProducts: (state, action) => {
        const sortType = action.payload;
        switch (sortType) {
          case 'A-Z':
            state.filteredProducts = state.filteredProducts.slice().sort((a, b) => a.title.localeCompare(b.title));
            break;
          case 'Z-A':
            state.filteredProducts = state.filteredProducts.slice().sort((a, b) => b.title.localeCompare(a.title));
            break;
          case 'low-to-high':
            state.filteredProducts = state.filteredProducts.slice().sort((a, b) => a.price - b.price);
            break;
          case 'high-to-low':
            state.filteredProducts = state.filteredProducts.slice().sort((a, b) => b.price - a.price);
            break;
          default:
            // Varsayılan olarak A-Z'ye göre sırala
            state.filteredProducts = state.filteredProducts.slice().sort((a, b) => a.title.localeCompare(b.title));
        }
       
      },
       filterProductsByStatus: (state, action) => {
      const status = action.payload;
      state.bestSellerProducts = state.products.filter((product) => product.status === status);
    },
   
  },
  
 
});

export const { setProducts, findProductsById, filterProductsByCategory, sortProducts,filterProductsByStatus} = productsSlice.actions;

export default productsSlice.reducer;
