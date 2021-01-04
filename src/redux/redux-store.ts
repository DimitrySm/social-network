import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import UsersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: UsersReducer,
});

// export type StoreReduxType = Store<
//   CombinedState<{
//     profilePage: ProfilePageType;
//     dialogsPage: DialogsPageType;
//   }>,
//   ActionsTyps
// >;

let store = createStore(reducers);

export default store;
