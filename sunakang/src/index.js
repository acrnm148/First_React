import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";

//import Library from "./chapter_03/Library";
// import Clock from "./chapter_04/Clock";
// import CommentList from "./chapter_05/CommentList";
// import NotificationList from "./chapter_06/NotificationList";
import Accomodate from "./chapter_07/Accomodate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Accomodate />
  </React.StrictMode>
);

reportWebVitals();
