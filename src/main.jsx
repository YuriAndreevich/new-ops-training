import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import Layout from "./layout";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>
);
