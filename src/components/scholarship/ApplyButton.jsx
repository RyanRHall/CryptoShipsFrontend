// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
// Source Files
import * as select from "@src/state/selectors"
import withDrizzle from "@src/hoc/withDrizzle"

// Component
const ApplyButton = ({ contractName, drizzle }) => {
  const _onClick = async () => {
    await drizzle.contracts[contractName].methods.applyTo("me", "link").send()
  }
  return <button onClick={_onClick}>Apply!</button>
}

export default withDrizzle(ApplyButton)
