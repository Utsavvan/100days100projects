import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: 1,
        name: "samsung",
        price: 100,
        count: 1,
      },{
        id: 2,
        name: "motorola",
        price: 200,
        count: 5,
      },{
        id: 3,
        name: "iphone",
        price: 500,
        count: 6,
      },{
        id: 4,
        name: "oneplus",
        price: 250,
        count: 7,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      const updatedItems = state.items.filter((items) => {
        return items.id !== action.payload;
      });
      console.log("🚀 ~ file: CartSlice.js:23 ~ updatedItems ~ updatedItems:", updatedItems)
      return { ...state.items, items: updatedItems };
    },
    plusItem: (state, action) => {
      const updatedItems = state.items.map((item, i) => {
        if (item.id === action.payload) {
          count = item.count;
          return { ...item, count: count + 1 };
        }
        return item;
      });

      return { ...state, items: updatedItems };
    },
    minusItem: (state, action) => {
      const updatedItems = state.items.map((item, i) => {
        if (item.id === action.payload) {
          count = item.count;
          return { ...item, count: count - 1 };
        }
        return item;
      }).filter(item => {
        return item.count !== 0 ;
      })

      return { ...state, items: updatedItems };
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, plusItem, minusItem, clearCart ,removeItem } = cartSlice.actions;

export default cartSlice.reducer;
