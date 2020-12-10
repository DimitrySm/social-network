import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./componets/Dialogs/Dialogs";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import { RootStateType } from "./redux/state";

type PropsType = {
  state: RootStateType;
  addPost: () => void;
  updateNewPostText: (text: string) => void;
};

const App = (props: PropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                addPost={props.addPost}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
