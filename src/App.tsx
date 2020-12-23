import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./componets/Dialogs/Dialogs";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import { StoreType } from "./redux/state";

type PropsType = {
  // dispatch: (action: ActionsTyps) => void;
  store: StoreType;
};

const App = (props: PropsType) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.store._state.profilePage}
              dispatch={props.store.dispatch.bind(props.store)}
            />
          )}
        />
        <Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
      </div>
    </div>
  );
};

export default App;
