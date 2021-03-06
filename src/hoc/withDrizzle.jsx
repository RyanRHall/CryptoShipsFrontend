import React from "react"
import { drizzleReactHooks } from "drizzle-react"

const withDrizzle = Component => props => {
  const { drizzle } = drizzleReactHooks.useDrizzle()
  return <Component {...props} drizzle={drizzle} />
}

export default withDrizzle
