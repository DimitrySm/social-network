import { combineReducers, createStore } from "redux";
import dialogsReducer, { DialogsPageType } from "./dialogsReducer";
import profileReducer, { ProfilePageType } from "./profileReducer";
import UsersReducer, { UsersPageType } from "./usersReducer";

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  usersPage: UsersPageType;
};

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: UsersReducer,
});

let store = createStore(reducers);

export type StoreReduxType = ReturnType<typeof reducers>;

export default store;
