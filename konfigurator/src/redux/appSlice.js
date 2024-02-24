import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        productsList: [],
        filteredProducts: [],
        cart: [],
        searchFilter: "",
        loadingStatus: "initial",
    },
    reducers: {
        loadProducts: (state, action) => {
            state.productsList = action.payload;
        },
        loadCartList: (state, action) => {
            state.cart = action.payload;
        },
       
        filterProducts: (state, action) => {
            state.searchFilter = action.payload;
            state.filteredProducts = state.productsList.filter((product) =>
                product.name.startsWith(state.searchFilter)
            );
        },
        setProductsLoadingState: (state, action) => {
            state.loadingStatus = action.payload;
        },
    },
});

export const {
    loadProducts,
    loadCartList,
    filterProducts,
    setProductsLoadingState,
} = appSlice.actions;

export default appSlice.reducer;
