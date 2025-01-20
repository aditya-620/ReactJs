import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


//redux works with synchronous actions, but we can use redux-thunk to work with asynchronous actions
//redux-thunk is a middleware that allows us to write action creators that return a function instead of an action object
//createAsyncThunk is a function that takes two arguments, the first is the name of the action and the second is a function that returns a promise

export const getAllData = createAsyncThunk("gitUsers" , async (args, {rejectWithValue}) => {
    const response = await fetch("https://api.github.com/users");
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue("oops..error occured");
    }
});

export const gitUser = createSlice({
    name : "gitUser",
    initialState : {
        users : [],
        loading : false,
        error : null,
    },

    extraReducers: (builder) => {
        builder
          .addCase(getAllData.pending, (state) => {
            state.loading = true;
          })
          .addCase(getAllData.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(getAllData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message; // Access the error message
          });
      },
});

export default gitUser.reducer;

