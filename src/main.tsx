import React from "react";
import ReactDOM from "react-dom/client";
import "./global.less";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "./provider/AuthProvider";
import RouteWapper from "./router";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <RouteWapper />
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
