import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";

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
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
      </div>
    </div>
  );
};

export default App;
