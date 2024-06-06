import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        productsList: [],
        filteredProducts: [],
        cart: [],
<<<<<<< HEAD
        lastViewed: [],
        currentPrice: [],
=======
        searchFilter: "",
        foodOnly: false,
        loadingStatus: "initial",
>>>>>>> 0d66f129524f83a39e3186ca792031d25e2a7865
    },
    reducers: {
        loadProducts: (state, action) => {
            state.productsList = action.payload;
        },
        loadCartList: (state, action) => {
            state.cart = action.payload;

        },
<<<<<<< HEAD
        setProductsLoadingState: (state, action) => {
            state.loadingStatus = action.payload;
        },
        clearCart: (state) => {
            state.cart = [];
        },
        filterProducts: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredProducts = state.productsList.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
        },
        setCurrentPrice: (state, action) => {
            state.currentPrice = action.payload;
        },
        addToLastViewed: (state, action) => {
            state.lastViewed = action.payload;
        }

=======
       
        setProductsLoadingState: (state, value) => {
            state.loadingStatus = value.payload;
        },
       
>>>>>>> 0d66f129524f83a39e3186ca792031d25e2a7865
    },
});

export const {
    loadProducts,
    loadCartList,
    setProductsLoadingState,
<<<<<<< HEAD
    clearCart,
    filterProducts,
    setCurrentPrice,
    addToLastViewed,
=======
>>>>>>> 0d66f129524f83a39e3186ca792031d25e2a7865
} = appSlice.actions;

export default appSlice.reducer;
