import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment: {
      id: "",
      amount: 0,
      currency: "",
      description: "",
      status: "",
      createdAt: "",
      updatedAt: "",
    },
    payments: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add Reducers Here
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
  },
});

export const { setPayment } = paymentSlice.actions;

export default paymentSlice.reducer;
