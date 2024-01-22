import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        productsList: [],
        filteredProducts: [],
        cart: [],
        searchFilter: "",
        // loadingStatus: "initial",
    },
    reducers: {
        loadProducts: (state, value) => {
            state.productsList = value.payload;
        },
        loadCartList: (state, value) => {
            state.cart = value.payload;
        },
        removeItem: (state, value) => {
            const productId = value.payload;
            state.cart = state.cart.filter((item) => item.id !== productId);
        },
        filterProducts: (state, value) => {
            state.searchFilter = value.payload;
            state.filteredProducts = state.productsList.filter((product) =>
                product.name.startsWith(state.searchFilter)
            );
        },
    },
});

export const {
    loadProducts,
    loadCartList,
    removeItem,
    filterProducts,
} = appSlice.actions;

export default appSlice.reducer;
