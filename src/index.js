import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import { init, login, logout } from "./config/near";
import JavascriptTimeAgo from "javascript-time-ago";

// The desired locales.
import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";

JavascriptTimeAgo.locale(en);
JavascriptTimeAgo.locale(ru);

window.nearInitPromise = init()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <ChakraProvider>
          <App login={login} logout={logout} />
        </ChakraProvider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  })
  .catch(console.error);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
