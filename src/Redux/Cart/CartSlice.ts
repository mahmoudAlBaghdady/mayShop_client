import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const fetchAddedItem = createAsyncThunk(
  "cart/fetchAddedItem",
  async (productData: any) => {
    const { id, quantity } = productData;

    const { data } = await axios.get(
      `http://localhost:4000/api/products/${id}`
    );
    return { data, quantity };
  }
);

interface cartInterface {
  cartItem: any[];
  totalPrice: number;
}
const initialState = {
  cartItem: window.localStorage.getItem("cartItem")
    ? JSON.parse(window.localStorage.getItem("cartItem")!)
    : [],
  totalPrice: 0,
} as cartInterface;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddedItem.fulfilled, (state, { payload }) => {
      const { data, quantity } = payload;
      console.log(data);
      const { _id } = data;

      const updatedCartItem = [...state.cartItem, { _id, quantity }];

      window.localStorage.setItem("cartItem", JSON.stringify(updatedCartItem));
      return {
        ...state,
        cartItem: updatedCartItem,
      };
    });
  },
});
export const getCartItem = (state: { cart: { cartItem: any } }) =>
  state.cart.cartItem;
export const getTotal = (state: { cart: { totalPrice: any } }) =>
  state.cart.totalPrice;
export default cartSlice.reducer;
