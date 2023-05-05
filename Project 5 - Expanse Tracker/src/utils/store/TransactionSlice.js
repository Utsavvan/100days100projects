import { createSlice } from "@reduxjs/toolkit";

const TransactionSlice = createSlice({
  name: "Transaction",
  initialState: {
    transactions: [
      {
        id: 1,
        value: 45,
        text:'Payment'
      },
      {
        id: 2,
        value: 85,
        text:'Payment'
      },
      {
        id: 3,
        value: -40,
        text:'Book'
      }
    ],
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    removeTransaction: (state, action) => {
        state.transactions = state.transactions.filter((transaction) => transaction.id !== action.payload) 
    },
  },
});

export const {addTransaction,removeTransaction} = TransactionSlice.actions;

export default TransactionSlice.reducer
