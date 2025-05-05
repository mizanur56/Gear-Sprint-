import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    id: 0,
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "",
    rating: 0,
    countInStock: 0,
    numReviews: 0,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      const payload = action.payload;

      state.product = {
        id: payload._id || 0,
        name: payload.name || "",
        price: payload.price || 0,
        description: payload.description || "",
        image: payload.image || payload.images || "",
        category: payload.category || "",
        rating: payload.rating || 0,
        countInStock: payload.stock || 0,
        numReviews: payload.numReviews || 0,
      };
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
