import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer, { AuthType } from "./authReducer";
import dialogsReducer, { DialogsPageType } from "./dialogsReducer";
import profileReducer, { ProfilePageType } from "./profileReducer";
import UsersReducer, { UsersPageType } from "./usersReducer";
import thunkMiddleware from "redux-thunk";

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  usersPage: UsersPageType;
  auth: AuthType;
};

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: UsersReducer,
  auth: AuthReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type StoreReduxType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;

export default store;
