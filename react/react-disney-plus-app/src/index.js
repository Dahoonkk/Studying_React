import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import app from "./firbase";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Redux 스토어에서 지속 데이터를 사용할 수 있을 때까지 앱의 UI 렌더링을 지연할 수 있다. 
// 이를 위해 Redux Persist에는 PersistGate 구성 요소가 포함되어 있다.
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
