// Libraries
import React from "react"
import ReactDOM from "react-dom"
import { Drizzle, generateStore } from "drizzle"
import { drizzleReactHooks } from "drizzle-react"
// Source Files
import App from "@src/components/App"
import ScholarshipManager from "@root/build/contracts/ScholarshipManager.json"

// configure drizzle
const drizzleOptions = {
  contracts: [
    ScholarshipManager
  ]
}
const drizzleStore = generateStore(drizzleOptions)
const drizzle = new Drizzle(drizzleOptions, drizzleStore)

// wrap app in providers
const wrappedApp = (
  <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>
      <App />
  </drizzleReactHooks.DrizzleProvider>
)

// doc ready callback
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(wrappedApp, document.getElementById("root"))
})
