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
      <drizzleReactHooks.Initializer
        // Optional `node` to render on errors. Defaults to `'Error.'`.
        error="There was an error."
        // Optional `node` to render while loading contracts and accounts. Defaults to `'Loading contracts and accounts.'`.
        loadingContractsAndAccounts="Also still loading."
        // Optional `node` to render while loading `web3`. Defaults to `'Loading web3.'`.
        loadingWeb3="Still loading."
      >
        <App />
      </drizzleReactHooks.Initializer>
    </drizzleReactHooks.DrizzleProvider>
)

// doc ready callback
document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(wrappedApp, document.getElementById("root"))
})
