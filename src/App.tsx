import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import { StoreReduxType } from "./redux/redux-store";
import { ActionsTyps, RootStateType } from "./redux/store";

type PropsType = {
  state: RootStateType;
  dispatch: (action: ActionsTyps) => void;
  store: StoreReduxType;
};

const App = (props: PropsType) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
      </div>
    </div>
  );
};

export default App;
