import { CombinedState, combineReducers, createStore, Store } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import { ActionsTyps, DialogsPageType, ProfilePageType } from "./store";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

export type StoreReduxType = Store<
  CombinedState<{
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
  }>,
  ActionsTyps
>;

let store = createStore(reducers);

export default store;
