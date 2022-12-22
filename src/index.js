import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "store/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";
import { Helmet } from "react-helmet";
import { titlePage } from "ultils/constant";
import "./styles/reset.scss";
import "./styles/styles.scss";

const persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Helmet>
          <title>{titlePage}</title>
          <link rel="icon" type="image/png" href="icon.png" sizes="16x16" />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.0.10/css/all.css"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        </Helmet>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
