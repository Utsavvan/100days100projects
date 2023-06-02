import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser(state, action) {
      const { userName, userImage , totalLikes } = action.payload;
        state.push({
          userName: userName,
          userImage: userImage,
          totalLikes: Math.floor(Math.random() * 100),
          uploadDate: new Date().toLocaleTimeString(),
          ...action.payload,
        });
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;