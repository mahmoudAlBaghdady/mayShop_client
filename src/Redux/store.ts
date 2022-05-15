import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./Cart/CartSlice";
import ProductSlice from "./Products/ProductSlice";

const store = configureStore({
  reducer: { products: ProductSlice, cart: CartSlice },
});
export type AppDispatch = typeof store.dispatch;

export default store;
