import { configureStore } from "@reduxjs/toolkit";

import TransactionSlice from "./TransactionSlice";

const TransactionStore = configureStore({
    reducer :{
        Transaction:TransactionSlice,
    }
})

export default TransactionStore;