import "babel-polyfill";
import "./styles/global.css";
import React from "react";
import ReactDom from "react-dom";

// import LibrarySummary from "./pages/library-summary";
// import LibraryDetail from "./pages/library-detail";
import Home from './pages/home';
if (document.getElementById("home")) {
  ReactDom.render(<Home />, document.getElementById("home"));
}

// if (document.getElementById("sum_biblio")) {
//   ReactDom.render(<LibrarySummary />, document.getElementById("sum_biblio"));
// }

// if (document.getElementById("detail_biblio")) {
//   ReactDom.render(<LibraryDetail />, document.getElementById("detail_biblio"));
// }
