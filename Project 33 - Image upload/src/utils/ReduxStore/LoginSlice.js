import {createSlice} from '@reduxjs/toolkit';

const LoginSlice = createSlice({
    name : 'Login',
    initialState:{
        userLoggedIn:false
    },
    reducers:{
        setLogin : (state,action) => {
            state.userLoggedIn = action.payload;
        }
    }
})

export const {setLogin} = LoginSlice.actions;
export default LoginSlice.reducer;