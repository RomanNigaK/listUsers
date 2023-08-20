import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

export const selectorUsers = (store: RootState) => store.app.users;
const userContacts = (store: RootState, ids: number[]) => {
  return store.app.users.filter((i) => ids.includes(i.id));
};
export const selectorIsCheckUser = (store: RootState, id: number) => {
  return store.app.ids.some((e) => e === id);
};

export const selectorUserContacts = createSelector([userContacts], (result) => {
  return result;
});
