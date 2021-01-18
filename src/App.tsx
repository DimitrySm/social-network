import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import UsersContainer from "./componets/Users/UsersContainer";

// type PropsType = {
//   state: RootStateType;
//   dispatch: (action: ActionsTyps) => void;
//   store: StoreReduxType;
// };

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
