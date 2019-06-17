import React from "react";
import { DrizzleContext, drizzleReactHooks } from "drizzle-react";
// TODO choose one method!

// const withDrizzle = Component => props => (
//   <DrizzleContext.Consumer>
//     { drizzleContext => <Component {...props} drizzleContext={drizzleContext} /> }
//   </DrizzleContext.Consumer>
// )


const withDrizzle = Component => props => {
  const { drizzle } = drizzleReactHooks.useDrizzle();
  return <Component {...props} drizzle={drizzle} />
}

export default withDrizzle;
