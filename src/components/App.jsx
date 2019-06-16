import React from "react";
import { DrizzleContext } from "drizzle-react";
import style from "./app.scss";
import ScholarshipList from "./scholarship_list/ScholarshipList.jsx";
import withDrizzle from "../hoc/withDrizzle.jsx";
import Web3_1x from "web3";
import { Web3_1xContext } from "@src/hoc/withWeb3_1x.jsx";



class App extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderLoaded() {
    // setup web3_1x - api expected by Drizzle
    const web3_1x = new Web3_1x(web3.currentProvider);
    return(
      <Web3_1xContext.Provider value={web3_1x}>
        <ScholarshipList />
      </Web3_1xContext.Provider>
    );
  }

  render() {
    const { drizzleContext: { initialized } } = this.props;
    return initialized ? this._renderLoaded() : "Loading...";
  }
}

export default withDrizzle(App);
