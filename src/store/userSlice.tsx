import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: {
    username: String;
    admin: Boolean;
    email: String;
    joindate: String;
    _id?: String;
  };
};

const initialState: InitialState = {
  user: {
    username: "",
    admin: false,
    email: "",
    joindate: "",
    _id: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    save: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice;

export const { save } = userSlice.actions;
