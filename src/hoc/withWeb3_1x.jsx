import React from "react";

export const Web3_1xContext = React.createContext();

// hoc giving child access to fooContext prop
export const withWeb3_1x = Component => props => (
  <Web3_1xContext.Consumer>
      {web3_1x => <Component {...props} web3_1x={web3_1x} />}
  </Web3_1xContext.Consumer>
);
