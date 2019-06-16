// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { Drizzle, generateStore } from "drizzle";
import { DrizzleContext } from "drizzle-react";
// Components
import App from "@src/components/App.jsx";
// Contracts
import ScholarshipManager from "@root/build/contracts/ScholarshipManager.json"

// configure drizzle
const drizzleOptions = {
  contracts: [
    ScholarshipManager
  ]
}
const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

const wrappedApp = (
  <DrizzleContext.Provider drizzle={drizzle}>
    <App />
  </DrizzleContext.Provider>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(wrappedApp, document.getElementById("root"));
});
