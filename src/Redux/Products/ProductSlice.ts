import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncProductsList = createAsyncThunk(
  "products/fetchAsyncProductsList",
  async () => {
    const { data } = await axios.get(`http://localhost:4000/api/products`);
    return data;
  }
);
export const fetchAsyncSingleProduct = createAsyncThunk(
  "products/fetchAsyncSingleProduct",
  async (id: string | undefined) => {
    const { data } = await axios.get(
      `http://localhost:4000/api/products/${id}`
    );
    return data;
  }
);
interface ProductState {
  productsList: [];
  product: {};
  productsListStatus: string;
  singleProductStatus: string;
}
const initialState = {
  productsList: [],
  product: {},
  productsListStatus: "pending",
  singleProductStatus: "pending",
} as ProductState;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetching all products
    builder.addCase(fetchAsyncProductsList.pending, (state) => {
      console.log("PRODUCTSLIST PENDING!!");
      state.productsListStatus = "pending";
    });
    builder.addCase(fetchAsyncProductsList.fulfilled, (state, { payload }) => {
      console.log("PRODUCTSLIST FETCH SUCCESSFULLY!!");

      return {
        ...state,
        productsListStatus: "success",
        productsList: payload,
      };
    });
    builder.addCase(fetchAsyncProductsList.rejected, (state) => {
      console.log("PRODUCTSLIST REJECTED!!");
      state.productsListStatus = "error";
    });

    //fetching Single product

    builder.addCase(fetchAsyncSingleProduct.pending, (state) => {
      console.log("SINGLE PRODUCT PENDING!!");
      state.singleProductStatus = "pending";
    });
    builder.addCase(fetchAsyncSingleProduct.fulfilled, (state, { payload }) => {
      console.log("SINGLE PRODUCT FETCH SUCCESSFULLY!!");
      return {
        ...state,
        singleProductStatus: "success",
        product: payload,
      };
    });
    builder.addCase(fetchAsyncSingleProduct.rejected, (state) => {
      console.log("SINGLE PRODUCT REJECTED!!");
      state.singleProductStatus = "error";
    });
  },
});

export const getProductsList = (state: { products: { productsList: any } }) =>
  state.products.productsList;

export const getSingleProduct = (state: { products: { product: any } }) =>
  state.products.product;

export const getproductsListStatus = (state: {
  products: { productsListStatus: string };
}) => state.products.productsListStatus;
export const getsingleProductStatus = (state: {
  products: { singleProductStatus: string };
}) => state.products.singleProductStatus;

export default productsSlice.reducer;
