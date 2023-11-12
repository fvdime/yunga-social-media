import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {}
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (token) => {
  if (!token) {
    return {}
  }

  const res = await axios.get("http://localhost:3000/api/getByToken", {
    headers: { Authorization: 'Bearer ' + token },
}
);
if (res?.data?.success) return res.data?.data;
return {};

})
export const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user = {
          ...state.user,
          ...action.payload,
      };
  },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  }
})