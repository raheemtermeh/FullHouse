import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import filterReducer from "./reducers/filterReducer";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    filters: filterReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
