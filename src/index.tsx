import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
