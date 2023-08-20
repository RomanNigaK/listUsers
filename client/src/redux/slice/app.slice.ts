import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: number;
  name: string;
  age: number;
  city: string;
  photo: string;
  contacts: number[];
};

export type { User };

type IState = {
  users: User[];
  ids: number[];
};

const initialState: IState = {
  users: [],
  ids: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      let users = action.payload;
      state.users = users;
    },
    addUser: (state, action) => {
      action.payload.contacts = state.ids;
      const id = state.users[state.users.length - 1].id + 1;
      action.payload.id = id;
      state.users.push(action.payload);
      state.ids = [];
    },
    addContact: (state, action) => {
      state.ids.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.ids = state.ids.filter((i) => i !== action.payload);
    },
  },
});

export const { loadUsers, addUser, addContact, deleteContact } =
  appSlice.actions;
export default appSlice.reducer;
