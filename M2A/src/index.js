import "babel-polyfill";
import "./styles/global.css";
import React from "react";
import ReactDom from "react-dom";

// import LibrarySummary from "./pages/library-summary";
// import LibraryDetail from "./pages/library-detail";
import Summary from "./pages/summary";
import Home from "./pages/home";
import Detail from "./pages/detail";
import AdvancedSearch from "./pages/advancedSearch";
import { isLogged } from "./services/authentication";
if (document.getElementById("home")) {
  ReactDom.render(<Home />, document.getElementById("home"));
} else if (document.getElementById("summary")) {
  ReactDom.render(<Summary />, document.getElementById("summary"));
} else if (document.getElementById("detail")) {
  ReactDom.render(<Detail />, document.getElementById("detail"));
} else if (document.getElementById("advanced")) {
  ReactDom.render(<AdvancedSearch />, document.getElementById("advanced"));
}
