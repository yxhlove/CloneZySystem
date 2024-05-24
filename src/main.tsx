import React from "react";
import ReactDOM from "react-dom/client";
import "./global.less";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "./components/AuthProvider";
import BaseRouter from "./components/BaseRouter";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <BaseRouter />
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
