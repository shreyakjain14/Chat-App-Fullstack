import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userData: {}, userID: null },
  reducers: {
    setUsersData(state, action) {
      state.userData = action.payload;
    },
    setUserID(state, action) {
      state.userID = action.payload;
    },
  },
});

export const { setUsersData, setUserID } = userSlice.actions;

export default userSlice.reducer;
