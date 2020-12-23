import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import store from "./state";

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
